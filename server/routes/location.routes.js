var express = require('express');

var locationController = require('../controllers/location.controller');

var isAuthenticated = require('../helpers/auth/isAuthenticated')

const router = express.Router();

module.exports =function(passport){

    router.route('/list').post(isAuthenticated,locationController.getLocationHistory);
    
    router.route('/list/:clientId').get(isAuthenticated,locationController.getLocationHistory);
    
    router.route('/new').post(isAuthenticated,locationController.updateNewLocation);
    
    return router; 
}
