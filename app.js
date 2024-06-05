const express = require("express");
let morgan = require("morgan");

const app = express();
// using ejs package
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.static("public"));

let blogs = [
  { title: "title 1", des: "des 1" },
  { title: "title 2", des: "des 2" },
  { title: "title 3", des: "des 3" },
];

app.get("/", (request, response) => {
  //response.send("<h1>Hello Home</h1>");
  //response.sendFile("./views/home.html", { root: __dirname });
  response.render("home", { blogs: blogs, title: "Home" });
});

app.get("/about", (request, response) => {
  //response.send("<h1>Hello about</h1>");
  //response.sendFile("./views/about.html", { root: __dirname });
  response.render("about", { title: "About" });
});

app.get("/about-us", (request, response) => {
  response.redirect("/about");
});

app.get("/contact", (request, response) => {
  //response.send("<h1>Hello about</h1>");
  //response.sendFile("./views/contact.html", { root: __dirname });
  response.render("contact", { title: "Contact" });
});
app.use((request, response) => {
  //response.sendFile("./views/404.html", { root: __dirname });
  response.status(404).render("404", { title: "404" });
});

//app.listen(3000);
app.listen(3000, () => {
  console.log("App is running in port 3000.");
});
