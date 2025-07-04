<h1 align="center">GitOps Lite</h1>

<p align="center">
  <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/larsgjobloop/2025-06-gitops-soa/continuous-delivery.yaml?style=for-the-badge&label=Build">
<p>

## Sketches

![Lecture Sketches](/docs/soa-sketches-lecture.png)

## Commands

- Start the compose stack

  ```sh
  docker compose up
  ````

- Stop docker compose when it's running (actully most programs)

  `Ctrl + C` (Sends a Termination signal SIGINT)

- If we have made changes to containers we **build**
  
  ```sh
  docker compose up --build
  ````

- Ensure everything is cleaned up

  ```sh
  docker compose down
  ````

## Connecting to PostgreSQL instance from extension

- Connection string `postgresql://myuser@localhost:5432/mydatabase`
- Then add password to it's own field

## PostgreSQL Connector for C# .NET

- [NpgSQL](https://www.npgsql.org/ef6/index.html)

## References

- [Traefik Proxy](https://doc.traefik.io/)
- [MinIO (Object Storge)](https://min.io/)
- [PostgreSQL](https://hub.docker.com/r/bitnami/postgresql)
