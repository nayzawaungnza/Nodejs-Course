const express = require("express");
const router = express.Router();
const Blog = require("../model/Blog");
const BlogController = require("../controller/BlogController");

router.get("/blogs", BlogController.index);

router.post("/blogs", BlogController.store);

router.get("/blogs/create", BlogController.create);

router.get("/blogs/:id", BlogController.show);

router.post("/blogs/:id/delete", BlogController.destory);

module.exports = router;
