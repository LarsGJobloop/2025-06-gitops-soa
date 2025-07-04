resource "github_repository_collaborators" "name" {
  repository = github_repository.this_repository.name

  user {
    username = "lillian24sfj"
  }

  user {
    username = "Pacolomoreno"
  }
}
