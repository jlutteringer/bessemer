data "aws_vpc" "default" {
  default = true
}

data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}

resource "random_password" "database" {
  length  = 32
  special = false
}

resource "aws_db_subnet_group" "simulacrum" {
  name       = "simulacrum"
  subnet_ids = data.aws_subnets.default.ids
}

# The API runs on Lambda outside the VPC (no NAT gateway to pay for), so the database is reachable publicly and
# relies on its password and enforced TLS
resource "aws_security_group" "database" {
  name        = "simulacrum-database"
  description = "Postgres access for the Simulacrum API and migrations"
  vpc_id      = data.aws_vpc.default.id

  ingress {
    from_port        = 5432
    to_port          = 5432
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}

resource "aws_rds_cluster_parameter_group" "simulacrum" {
  name   = "simulacrum-aurora-postgresql18"
  family = "aurora-postgresql18"

  parameter {
    name  = "rds.force_ssl"
    value = "1"
  }
}

resource "aws_rds_cluster" "simulacrum" {
  cluster_identifier = "simulacrum"
  engine             = "aurora-postgresql"
  engine_mode        = "provisioned"
  engine_version     = "18.6"

  database_name   = "simulacrum"
  master_username = "simulacrum"
  master_password = random_password.database.result

  db_subnet_group_name            = aws_db_subnet_group.simulacrum.name
  db_cluster_parameter_group_name = aws_rds_cluster_parameter_group.simulacrum.name
  vpc_security_group_ids          = [aws_security_group.database.id]
  storage_encrypted               = true

  # Pauses after 5 idle minutes (no connections) and resumes on the next connection in about 15 seconds
  serverlessv2_scaling_configuration {
    min_capacity             = 0
    max_capacity             = 2
    seconds_until_auto_pause = 300
  }

  backup_retention_period   = 7
  deletion_protection       = true
  skip_final_snapshot       = false
  final_snapshot_identifier = "simulacrum-final"

  lifecycle {
    # Minor versions are upgraded automatically
    ignore_changes = [engine_version]
  }
}

resource "aws_rds_cluster_instance" "simulacrum" {
  identifier                 = "simulacrum-1"
  cluster_identifier         = aws_rds_cluster.simulacrum.id
  engine                     = aws_rds_cluster.simulacrum.engine
  instance_class             = "db.serverless"
  publicly_accessible        = true
  auto_minor_version_upgrade = true
}

locals {
  database_url = "postgresql://${aws_rds_cluster.simulacrum.master_username}:${random_password.database.result}@${aws_rds_cluster.simulacrum.endpoint}:${aws_rds_cluster.simulacrum.port}/${aws_rds_cluster.simulacrum.database_name}"
}
