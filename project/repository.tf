resource "github_repository" "this_repository" {
  name        = "sandefjord-compose-server"
  description = "An auto reconciling compose server for Kodehode Sandefjord"
}

output "project" {
  value = github_repository.this_repository.html_url
}
