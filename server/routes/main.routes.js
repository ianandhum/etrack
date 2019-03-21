
var express = require('express');

var postController = require('../controllers/user.controller');

var isAuthenticated = require('../helpers/auth/isAuthenticated')

var authRoutes = require('./auth.routes')

const router = express.Router();


module.exports =function(passport){

    authRoutes(router,passport);
    
    router.route('/').get(isAuthenticated,postController.getUsers);
    
    return router;
}

