terraform {
  required_providers {
    github = {
      source = "integrations/github"
      version = "6.6.0"
    }
  }
}

provider "github" {
  token = var.github_token
}

variable "github_token" {
  description = "The API token for GitHub"
  type = string
  sensitive = true
}
