const express = require("express");
const { dirname } = require("path");

const app = express();

app.get("/", (request, response) => {
  //response.send("<h1>Hello Home</h1>");
  response.sendFile("./views/home.html", { root: __dirname });
});

app.get("/about", (request, response) => {
  //response.send("<h1>Hello about</h1>");
  response.sendFile("./views/about.html", { root: __dirname });
});

app.get("/about-us", (request, response) => {
  response.redirect("/about");
});

app.get("/contact", (request, response) => {
  //response.send("<h1>Hello about</h1>");
  response.sendFile("./views/contact.html", { root: __dirname });
});
app.use((request, response) => {
  response.sendFile("./views/404.html", { root: __dirname });
});

//app.listen(3000);
app.listen(3000, () => {
  console.log("App is running in port 3000.");
});
