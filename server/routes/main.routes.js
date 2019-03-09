
var express = require('express');

var postController = require('../controllers/user.controller');

const router = express.Router();



router.route('/').get(postController.getUsers);

module.exports = router;
