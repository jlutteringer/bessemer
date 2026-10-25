data "archive_file" "api" {
  type        = "zip"
  source_dir  = "${path.module}/../../apps/api/dist-lambda"
  output_path = "${path.module}/.terraform/api-lambda.zip"
}

resource "aws_iam_role" "api" {
  name = "simulacrum-api"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Service = "lambda.amazonaws.com" }
      Action    = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "api_logs" {
  role       = aws_iam_role.api.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_cloudwatch_log_group" "api" {
  name              = "/aws/lambda/simulacrum-api"
  retention_in_days = 30
}

resource "aws_lambda_function" "api" {
  function_name    = "simulacrum-api"
  role             = aws_iam_role.api.arn
  runtime          = "nodejs24.x"
  architectures    = ["arm64"]
  handler          = "index.handler"
  filename         = data.archive_file.api.output_path
  source_code_hash = data.archive_file.api.output_base64sha256
  memory_size      = 512
  # Leaves room for the database to resume from a pause
  timeout = 30

  environment {
    variables = {
      NODE_OPTIONS = "--enable-source-maps"
      # The runtime ships the RDS certificate authorities here but doesn't trust them by default
      NODE_EXTRA_CA_CERTS  = "/var/runtime/ca-cert.pem"
      DATABASE_URL         = "${local.database_url}?sslmode=verify-full"
      DATABASE_POOL_MAX    = "1"
      COGNITO_USER_POOL_ID = aws_cognito_user_pool.simulacrum.id
      COGNITO_CLIENT_ID    = aws_cognito_user_pool_client.web.id
      COGNITO_DOMAIN       = local.cognito_domain_url
    }
  }

  depends_on = [aws_cloudwatch_log_group.api, aws_iam_role_policy_attachment.api_logs]
}

# Authentication happens in the API itself by verifying the Cognito access token
resource "aws_lambda_function_url" "api" {
  function_name      = aws_lambda_function.api.function_name
  authorization_type = "NONE"
}

resource "aws_lambda_permission" "api_url" {
  statement_id           = "FunctionUrlAllowPublicAccess"
  function_name          = aws_lambda_function.api.function_name
  action                 = "lambda:InvokeFunctionUrl"
  principal              = "*"
  function_url_auth_type = "NONE"
}

resource "aws_lambda_permission" "api_url_invoke" {
  statement_id             = "FunctionUrlAllowInvokeAction"
  function_name            = aws_lambda_function.api.function_name
  action                   = "lambda:InvokeFunction"
  principal                = "*"
  invoked_via_function_url = true
}
