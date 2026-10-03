variable "github_token" {
  description = "GitHub personal access token Amplify uses once to connect the repository. Only needed when creating the app; it isn't stored by Amplify."
  type        = string
  sensitive   = true
  default     = null
}
