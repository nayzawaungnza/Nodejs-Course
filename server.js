const http = require("http");

const server = http.createServer((request, response) => {
  console.log("request make from client");

  response.setHeader('Content-Type', 'text/html');
  response.write('<h1>hello world</h1>');
  response.end();
});

server.listen(3000, 'localhost', () => {
  console.log("server listening on");
});
