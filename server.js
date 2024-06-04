const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  console.log("request make from client");

  response.setHeader("Content-Type", "text/html");
  fs.readFile("./views/home.html", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      response.write(data);
    }
    response.end();
  });
});

server.listen(3000, "localhost", () => {
  console.log("server listening on");
});
