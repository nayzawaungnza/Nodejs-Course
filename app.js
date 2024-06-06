const express = require("express");
let morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./model/Blog");

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
  let blogs = await Blog.find().sort({ createdAt: -1 });
  response.render("home", { blogs: blogs, title: "Home" });
});

app.get("/about", (request, response) => {
  response.render("about", { title: "About" });
});

app.get("/about-us", (request, response) => {
  response.redirect("/about");
});

app.get("/contact", (request, response) => {
  response.render("contact", { title: "Contact" });
});

app.get("/blogs/create", (request, response) => {
  response.render("blogs/create", { title: "Blog Create" });
});

app.get("/blogs/:id", async (request, response, next) => {
  try {
    let { id } = request.params;
    //console.log(id);
    let blog = await Blog.findById(id);
    response.render("./blogs/show", { blog, title: "Blog Single" });
  } catch (error) {
    console.log(error);
    next();
  }
});

app.post("/blogs/:id/delete", async (request, response, next) => {
  try {
    let { id } = request.params;
    await Blog.findByIdAndDelete(id);
    response.redirect("/");
  } catch (error) {
    console.log(error);
    next();
  }
});

app.post("/blogs", async (request, response) => {
  let { title, intro, body } = request.body;
  let blog = new Blog({
    title: title,
    intro: intro,
    body: body,
  });
  await blog.save();
  response.redirect("/");
});

app.use((request, response) => {
  //response.sendFile("./views/404.html", { root: __dirname });
  response.status(404).render("404", { title: "404" });
});
