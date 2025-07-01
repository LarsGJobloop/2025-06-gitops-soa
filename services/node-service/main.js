import { createServer } from 'http'

const port = 80;
const address = "0.0.0.0";

const server = createServer();

server.on("request", (request, response) => {
  console.log("Recieved request")
  const path = request.url
  console.log(path)

  response.writeHead(200)
  response.end("OK!")
});

// Ensure we listen for termination signals, to avoid hanging calling processes
// Also to avoid being forcefully stopped (killed)
const shutdownHandler = (signal) => {
  console.log(`Received: ${signal}. Shutting down`);
  process.exit(0);
}
process.on("SIGINT", shutdownHandler);
process.on("SIGTERM", shutdownHandler);

server.listen(port, address, () => {
  console.log(`Server started, listening on http://${address}:${port}`)
});
