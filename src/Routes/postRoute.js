const express = require('express');
const postController = require('../Controllers/postController');

const Post = express.Router();

Post.get('/:id', postController.findById);
Post.put('/:id', postController.updatePost);
Post.get('/', postController.getAll);

module.exports = Post;