import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A blog must have a title"],
  },
  content: {
    type: String,
    required: [true, "A blog must have some content"],
  },
});

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
