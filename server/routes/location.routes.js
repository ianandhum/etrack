var express = require('express');

var locationController = require('../controllers/location.controller');

var isAuthenticated = require('../helpers/auth/isAuthenticated')

var headerLogin = require("../helpers/auth/header_login");

const router = express.Router();

module.exports =function(passport){

    router.route('/list').post(headerLogin(passport),locationController.getLocationHistory);
    
    router.route('/list/:clientId').get(headerLogin(passport),locationController.getLocationHistory);
    
    router.route('/new').post(headerLogin(passport),locationController.updateNewLocation);
    
    return router; 
}
