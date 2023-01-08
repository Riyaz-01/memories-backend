import express from 'express';
import {
	getAllPosts,
	createPost,
	deletePost,
	increaseLikeCount,
	getOnePost,
	updatePost,
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getOnePost);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.put('/:id/like', increaseLikeCount);
router.put('/:id', updatePost);

export default router;
