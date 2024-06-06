const express = require("express");
const router = express.Router();
const Blog = require("../model/Blog");

router.post("/blogs", async (request, response) => {
  let { title, intro, body } = request.body;
  let blog = new Blog({
    title: title,
    intro: intro,
    body: body,
  });
  await blog.save();
  response.redirect("/");
});

router.get("/blogs/create", (request, response) => {
  response.render("blogs/create", { title: "Blog Create" });
});

router.get("/blogs/:id", async (request, response, next) => {
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

router.post("/blogs/:id/delete", async (request, response, next) => {
  try {
    let { id } = request.params;
    await Blog.findByIdAndDelete(id);
    response.redirect("/");
  } catch (error) {
    console.log(error);
    next();
  }
});

module.exports = router;
