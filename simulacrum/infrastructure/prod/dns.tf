resource "aws_route53_zone" "simulacrum" {
  name = local.domain
}

resource "aws_amplify_domain_association" "simulacrum" {
  app_id                 = aws_amplify_app.simulacrum.id
  domain_name            = local.domain
  enable_auto_sub_domain = false

  # Verification can't complete until the GoDaddy nameservers point at the Route 53 zone
  wait_for_verification = false

  certificate_settings {
    type = "AMPLIFY_MANAGED"
  }

  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = ""
  }

  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = "www"
  }
}
