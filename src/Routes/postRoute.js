const express = require('express');
const postController = require('../Controllers/postController');

const Post = express.Router();

Post.get('/', postController.getAll);

module.exports = Post;