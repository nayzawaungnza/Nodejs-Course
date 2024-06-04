const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  console.log("request make from client");
  let filename;
  switch (request.url) {
    case "/":
      filename = "home.html";
      response.statusCode = 200;
      break;
    case "/about":
      filename = "about.html";
      response.statusCode = 200;
      break;
    case "/contact":
      filename = "contact.html";
      response.statusCode = 200;
      break;

    default:
      filename = "404.html";
      response.statusCode = 404;
      break;
  }

  response.setHeader("Content-Type", "text/html");
  fs.readFile("./views/" + filename, (error, data) => {
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
