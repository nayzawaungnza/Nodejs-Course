const express = require("express");
let morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./model/Blog");
const BlogRoutes = require("./route/BlogRoutes");
var expressLayouts = require("express-ejs-layouts");
const app = express();

app.use(express.urlencoded({ extended: true })); // form input data pass

//dburl
let mongoUrl =
  "mongodb+srv://nayzawaung:nayzawaung12345@cluster0.u5l4zut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("connected to db");
    app.listen(3000, () => {
      console.log("app is running on port 3000");
    });
  })
  .catch((e) => {
    console.log(e);
  });
// using ejs package
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layouts/layout");

app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/", async (request, response) => {
  response.redirect("/blogs");
});

app.get("/blogs", async (request, response) => {
  let blogs = await Blog.find().sort({ createdAt: -1 });
  response.render("home", { blogs: blogs, title: "Home" });
});
app.use(BlogRoutes);
app.get("/about", (request, response) => {
  response.render("about", { title: "About" });
});

app.get("/about-us", (request, response) => {
  response.redirect("/about");
});

app.get("/contact", (request, response) => {
  response.render("contact", { title: "Contact" });
});
app.use((request, response) => {
  //response.sendFile("./views/404.html", { root: __dirname });
  response.status(404).render("404", { title: "404" });
});
