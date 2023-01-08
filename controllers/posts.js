import Post from '../models/post.js';

//get requests
export const getAllPosts = async (req, res) => {
	try {
		const posts = await Post.find();
		res.status(200).json({
			data: posts,
			message: 'Request successfully served',
		});
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const getOnePost = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.status(200).json({
			data: post,
			message: 'Request successfully served',
		});
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

//post requests
export const createPost = async (req, res) => {
	const currentDate = new Date();
	const newPost = new Post({ ...req.body, createdAt: currentDate });
	try {
		await newPost.save();
		res.status(201).json({ data: newPost, message: 'New post created' });
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

//delete requests
export const deletePost = async (req, res) => {
	try {
		await Post.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: 'Post deleted' });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

//put requests
export const increaseLikeCount = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		post.likeCount++;
		await post.save();
		res.status(200).json({
			data: post,
			message: 'Like count increased to ' + post.likeCount,
		});
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
export const updatePost = async (req, res) => {
	try {
		const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(200).json({
			data: post,
			message: 'Post updated',
		});
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
