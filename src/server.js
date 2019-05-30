const app = require("./app");
const http = require("http");
const server = http.createServer(app);

server.listen(6000);

server.on("listening", () => {
  console.log("server is listening for requests on port 6000");
});