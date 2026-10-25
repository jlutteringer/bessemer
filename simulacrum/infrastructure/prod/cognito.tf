locals {
  auth_origins = concat(["https://${local.domain}"], var.local_auth_origins)

  cognito_domain_url = "https://${aws_cognito_user_pool_domain.simulacrum.domain}.auth.us-east-1.amazoncognito.com"
}

resource "aws_cognito_user_pool" "simulacrum" {
  name                = "simulacrum"
  user_pool_tier      = "ESSENTIALS"
  deletion_protection = "ACTIVE"

  username_attributes      = ["email"]
  auto_verified_attributes = ["email"]

  # Required attributes can't be changed once the pool exists
  schema {
    name                = "given_name"
    attribute_data_type = "String"
    required            = true
    mutable             = true

    string_attribute_constraints {
      min_length = 1
      max_length = 256
    }
  }

  schema {
    name                = "family_name"
    attribute_data_type = "String"
    required            = true
    mutable             = true

    string_attribute_constraints {
      min_length = 1
      max_length = 256
    }
  }

  username_configuration {
    case_sensitive = false
  }

  password_policy {
    minimum_length                   = 8
    require_lowercase                = true
    require_uppercase                = true
    require_numbers                  = true
    require_symbols                  = false
    temporary_password_validity_days = 7
  }

  account_recovery_setting {
    recovery_mechanism {
      name     = "verified_email"
      priority = 1
    }
  }

  # Cognito's built-in sender is capped at 50 emails a day; switch to SES before launch
  email_configuration {
    email_sending_account = "COGNITO_DEFAULT"
  }
}

resource "aws_cognito_user_pool_domain" "simulacrum" {
  domain                = "simulacrum-cloud"
  user_pool_id          = aws_cognito_user_pool.simulacrum.id
  managed_login_version = 2
}

resource "aws_cognito_user_pool_client" "web" {
  name         = "simulacrum-web"
  user_pool_id = aws_cognito_user_pool.simulacrum.id

  generate_secret               = false
  prevent_user_existence_errors = "ENABLED"
  enable_token_revocation       = true

  allowed_oauth_flows_user_pool_client = true
  allowed_oauth_flows                  = ["code"]
  allowed_oauth_scopes                 = ["openid", "email", "profile"]
  supported_identity_providers         = ["COGNITO"]

  callback_urls = [for origin in local.auth_origins : "${origin}/api/auth/sign-in-callback"]
  logout_urls   = [for origin in local.auth_origins : "${origin}/api/auth/sign-out-callback"]

  explicit_auth_flows = ["ALLOW_USER_SRP_AUTH", "ALLOW_REFRESH_TOKEN_AUTH"]

  access_token_validity  = 60
  id_token_validity      = 60
  refresh_token_validity = 30

  token_validity_units {
    access_token  = "minutes"
    id_token      = "minutes"
    refresh_token = "days"
  }
}

resource "aws_cognito_managed_login_branding" "web" {
  user_pool_id                = aws_cognito_user_pool.simulacrum.id
  client_id                   = aws_cognito_user_pool_client.web.id
  use_cognito_provided_values = true
}
