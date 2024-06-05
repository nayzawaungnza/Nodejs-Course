const express = require("express");
const { dirname } = require("path");

const app = express();
// using ejs package
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  //response.send("<h1>Hello Home</h1>");
  //response.sendFile("./views/home.html", { root: __dirname });
  response.render("home");
});

app.get("/about", (request, response) => {
  //response.send("<h1>Hello about</h1>");
  //response.sendFile("./views/about.html", { root: __dirname });
  response.render("about");
});

app.get("/about-us", (request, response) => {
  response.redirect("/about");
});

app.get("/contact", (request, response) => {
  //response.send("<h1>Hello about</h1>");
  //response.sendFile("./views/contact.html", { root: __dirname });
  response.render("contact");
});
app.use((request, response) => {
  //response.sendFile("./views/404.html", { root: __dirname });
  response.status(404).render("404");
});

//app.listen(3000);
app.listen(3000, () => {
  console.log("App is running in port 3000.");
});
