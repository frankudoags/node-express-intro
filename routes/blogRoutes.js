import { Router } from "express";
import { addBlog, deleteSingleBlog, getAllBlogs, getSingleBlog } from "../controllers/blogController.js";

const blogRouter = Router();

blogRouter.get("/add-blog", addBlog);

blogRouter.get("/all-blogs", getAllBlogs);

blogRouter.get("/single-blog/:id", getSingleBlog);

blogRouter.delete("/delete-blog/:id", deleteSingleBlog);


export default blogRouter;