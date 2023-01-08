import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
	title: {
		type: 'string',
		required: true,
	},
	message: {
		type: 'string',
		required: true,
	},
	creator: {
		type: 'string',
		required: true,
	},
	tags: ['string'],
	image: 'string',
	likeCount: {
		type: 'number',
		default: 0,
	},
	createdAt: {
		type: 'date',
		default: Date.now,
	},
});

const Post = mongoose.model('Post', postSchema);

export default Post;
