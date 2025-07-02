import { createServer } from 'http'
import {
  terminate,
  createRouter,
  logWelcome
} from "./dsl.js"

const port = 80;
// Defaulting to the public interfaces since it's inside a container
// The runtime does the opposite and needs explicit allowances
const listenInterface = "0.0.0.0";

const addressBook = {
  "/internal": {
    protocol: "http",
    domain: "example-service:8080",
    endpoint: "/"
  },
  "/external": {
    protocol: "http",
    domain: "127.0.0.1:80",
    endpoint: "/api/example"
  },
}

// Compose application
const server = createServer();

// Ensure we listen for termination signals, to avoid hanging calling processes
// Also to avoid being forcefully stopped/killed (Docker uses a ~10s timeout)
process.on("SIGINT", terminate); // Sent by Ctrl+C
process.on("SIGTERM", terminate); // Sent by Docker

const handleRequest = createRouter(addressBook)
server.on("request", handleRequest);

server.listen(port, listenInterface, logWelcome);
