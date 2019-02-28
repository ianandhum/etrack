var express =  require('express');
var path =  require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bb =  require('express-busboy');

//parse env file
require('dotenv').config();


//errorHandlers
var errors = require('./helpers/errors');

//routes 
var apiRoutes = require('./routes/main.routes');

// define our app using express
const app = express();

// express-busboy to parse multipart/form-data
bb.extend(app);

// allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Content-Type", "application/json");
  next();
})

// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


// connect to database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true });


//Connect Routes to express
app.use('/api',apiRoutes);


// catch 404
app.use((req, res, next) => {
    errors.error404(req,res);
});

// start the server
app.listen(process.env.NODE_PORT ||3000 ,() => {
  console.log(`Server has Started at localhost:${process.env.NODE_PORT}`);
});
