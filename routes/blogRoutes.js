// import express from 'express';
// const router = express.Router();

// import {
//   createBlog,
//   getAllBlogs,
//   getBlogById,
//   deleteBlog,
// } from '../controllers/blogController.js';

// router.route('/').post(createBlog).get(getAllBlogs);
// router.route('/:id').get(getBlogById).delete(deleteBlog);

// export default router;



import express from 'express';
const router = express.Router();

import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js';

router.route('/').post(createBlog).get(getAllBlogs);
router.route('/:id').get(getBlogById).put(updateBlog).delete(deleteBlog);

export default router;
