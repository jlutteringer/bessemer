output "nameservers" {
  description = "Set these as the custom nameservers for simulacrum.cloud in GoDaddy"
  value       = aws_route53_zone.simulacrum.name_servers
}

output "amplify_app_id" {
  value = aws_amplify_app.simulacrum.id
}

output "amplify_default_domain" {
  value = "https://main.${aws_amplify_app.simulacrum.default_domain}"
}

output "github_deploy_role_arn" {
  value = aws_iam_role.github_deploy.arn
}

output "cognito_user_pool_id" {
  value = aws_cognito_user_pool.simulacrum.id
}

output "cognito_client_id" {
  value = aws_cognito_user_pool_client.web.id
}

output "cognito_domain" {
  value = local.cognito_domain_url
}

output "api_url" {
  value = aws_lambda_function_url.api.function_url
}

output "database_url" {
  description = "Connection string for running migrations"
  value       = "${local.database_url}?sslmode=require"
  sensitive   = true
}

output "database_host" {
  value = aws_rds_cluster.simulacrum.endpoint
}

output "database_username" {
  value = aws_rds_cluster.simulacrum.master_username
}

output "database_password" {
  value     = random_password.database.result
  sensitive = true
}
