variable "github_token" {
  description = "GitHub personal access token Amplify uses once to connect the repository. Only needed when creating the app; it isn't stored by Amplify."
  type        = string
  sensitive   = true
  default     = null
}

variable "local_auth_origins" {
  description = "Local dev origins allowed as Cognito callback and sign-out URLs"
  type        = list(string)
  default     = ["http://localhost:4000"]
}
