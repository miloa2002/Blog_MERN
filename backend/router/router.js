import express from "express";
import {
  addBlog,
  getBlog,
  getBlogs,
  deleteBlog,
  updateBlog,
} from "../controllers/blogController.js";

const router = express.Router();

//blog_travel
router.route("/")
    .get(getBlogs)
    .post(addBlog);

router.route("/:id")
    .get(getBlog)
    .delete(deleteBlog)
    .put(updateBlog)

//comments

export default router;