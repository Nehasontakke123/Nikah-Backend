import Blog from '../models/blogModel.js';

// @desc    Create new blog/feedbackimport Blog from '../models/blogModel.js';

// CREATE
export const createBlog = async (req, res) => {
  try {
    const { name, message, rating } = req.body;
    const blog = new Blog({ name, message, rating });
    const createdBlog = await blog.save();
    res.status(201).json(createdBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ALL
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ONE
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    blog ? res.json(blog) : res.status(404).json({ message: 'Blog not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
export const updateBlog = async (req, res) => {
  try {
    const { name, message, rating } = req.body;
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      blog.name = name;
      blog.message = message;
      blog.rating = rating;
      const updatedBlog = await blog.save();
      res.json(updatedBlog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
// DELETE
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      await Blog.deleteOne({ _id: req.params.id }); // 👈 fix ahe he
      res.json({ message: 'Blog deleted' });
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

