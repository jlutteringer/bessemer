resource "aws_amplify_app" "simulacrum" {
  name                 = "simulacrum"
  repository           = "https://github.com/${local.github_repo}"
  access_token         = var.github_token
  platform             = "WEB_COMPUTE"
  iam_service_role_arn = aws_iam_role.amplify.arn

  enable_branch_auto_build    = false
  enable_auto_branch_creation = false

  environment_variables = {
    AMPLIFY_MONOREPO_APP_ROOT = local.app_root
  }

  custom_rule {
    source = "https://www.${local.domain}"
    target = "https://${local.domain}"
    status = "301"
  }

  lifecycle {
    ignore_changes = [access_token]
  }
}

resource "aws_amplify_branch" "main" {
  app_id            = aws_amplify_app.simulacrum.id
  branch_name       = "main"
  stage             = "PRODUCTION"
  framework         = "Next.js - SSR"
  enable_auto_build = false
}

resource "aws_iam_role" "amplify" {
  name = "simulacrum-amplify"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Service = "amplify.amazonaws.com" }
      Action    = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy" "amplify_logs" {
  name = "ssr-logs"
  role = aws_iam_role.amplify.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Action = [
        "logs:CreateLogStream",
        "logs:CreateLogGroup",
        "logs:DescribeLogGroups",
        "logs:PutLogEvents",
      ]
      Resource = "*"
    }]
  })
}
