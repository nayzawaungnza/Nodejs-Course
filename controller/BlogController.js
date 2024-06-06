const Blog = require("../model/Blog");
const BlogController = {
  index: async (request, response) => {
    let blogs = await Blog.find().sort({ createdAt: -1 });
    response.render("home", { blogs: blogs, title: "Home" });
  },
  create: (request, response) => {
    response.render("blogs/create", { title: "Blog Create" });
  },
  store: async (request, response) => {
    let { title, intro, body } = request.body;
    let blog = new Blog({
      title: title,
      intro: intro,
      body: body,
    });
    await blog.save();
    response.redirect("/");
  },
  show: async (request, response, next) => {
    try {
      let { id } = request.params;
      //console.log(id);
      let blog = await Blog.findById(id);
      response.render("./blogs/show", { blog, title: "Blog Single" });
    } catch (error) {
      console.log(error);
      next();
    }
  },
  destory: async (request, response, next) => {
    try {
      let { id } = request.params;
      await Blog.findByIdAndDelete(id);
      response.redirect("/");
    } catch (error) {
      console.log(error);
      next();
    }
  },
};
module.exports = BlogController;
