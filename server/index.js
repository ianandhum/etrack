var express =  require('express');
var path =  require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var expressSession = require('express-session');

if(process.env.NODE_ENV!='production'){
  //parse env file
  var env_result = require('dotenv').config();
  if(env_result.error){
    throw env_result.error;
  }  
}

//errorHandlers
var errors = require('./helpers/errors');

//routes 
var apiRoutes = require('./routes/main.routes');

// define our app using express
const app = express();


// dis-allow-cors
app.use(function(req,res,next){
  //res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Content-Type", "application/json");
  next();
})

// configure app

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(expressSession({
  secret: 'KEY_FOR_SESSION_SIGNING',
  resave:false,
  saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true },function(err){
  if(!err){
    console.log("Mongodb Init")
  }
  else{
    console.log(err);
    process.exit(1);
  }
});


require('./helpers/auth')(passport);

var routes = apiRoutes(passport);
//app.use('/', routes);


//Connect Routes to express
app.use('/api',routes);


// catch 404
app.use((req, res, next) => {
    errors.error404(req,res);
});

// start the server
app.listen(process.env.NODE_PORT || 3000 ,() => {
  console.log(`Server has Started at localhost:${process.env.NODE_PORT}`);
});
