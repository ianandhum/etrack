
var express = require('express');

var locationRoutes = require('./location.routes');


var authRoutes = require('./auth.routes')

const router = express.Router();

module.exports =function(passport){

    authRoutes(router,passport);
    
    router.use("/location",locationRoutes(passport));
    
    return router;
}

