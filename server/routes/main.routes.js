
var express = require('express');

var postController = require('../controllers/post.controller');

const router = express.Router();



router.route('/').get(postController.getPosts);

module.exports = router;
