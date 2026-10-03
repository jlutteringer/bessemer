terraform {
  required_version = ">= 1.10"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.67"
    }
  }

  backend "s3" {
    bucket       = "simulacrum-terraform-state-512725667825"
    key          = "prod/terraform.tfstate"
    region       = "us-east-1"
    encrypt      = true
    use_lockfile = true
  }
}

provider "aws" {
  region              = "us-east-1"
  allowed_account_ids = ["512725667825"]

  default_tags {
    tags = {
      Project     = "simulacrum"
      Environment = "prod"
      ManagedBy   = "terraform"
    }
  }
}

locals {
  domain      = "simulacrum.cloud"
  github_repo = "jlutteringer/bessemer"
  app_root    = "simulacrum/apps/simulacrum"
}
