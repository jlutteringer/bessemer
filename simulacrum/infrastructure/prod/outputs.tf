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
