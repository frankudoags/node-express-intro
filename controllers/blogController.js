import Blog from "../db/models/blog.js";
import mongoose from "mongoose";

export const addBlog = async (_req, res) => {
  const blog = new Blog({
    title: "new blog 2",
    snippet: "about my new blog",
    body: "more about my new blog",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(404).send({
        message: "Error adding blog",
      });
    });
};

export const getAllBlogs = async (_req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(404).send({
        message: "Error getting all blogs",
      });
    });
};

export const getSingleBlog = async (_req, res) => {
  if (!mongoose.Types.ObjectId.isValid(_req.params.id)) {
    return res.status(404).send({
      message: "Invalid ID",
    });
  }
  Blog.findById(_req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(404).send({
        message: "Error getting single blog",
      });
    });
};

export const deleteSingleBlog = async (_req, res) => {
  if (!mongoose.Types.ObjectId.isValid(_req.params.id)) {
    return res.status(404).send({
      message: "Invalid ID",
    });
  }
  Blog.findByIdAndDelete(_req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(404).send({
        message: "Error deleting single blog",
      });
    });
};