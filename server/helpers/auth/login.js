var CustomStrategy   = require('passport-custom').Strategy;
var HeaderStrategy   = require('passport-http-header-strategy').Strategy;
var request = require('request');
var authAtExternalAPI = function(token,done){
    request({
        url:process.env.ANLON_API_ENDPOINT+"/session-info",
        headers: {
            'X-Authentication': token
        }
    }, 
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var userInfo = JSON.parse(body);
            if(userInfo.status){
                return done(null, userInfo.data); 
            }
        }
        return done(null,false);
    })
};
module.exports = function(passport){
    
    passport.use('SessionMethod', new CustomStrategy(
        function(req, done) {
            authAtExternalAPI(req.params.token,done);
        })
    );
    passport.use('HeaderMethod', new HeaderStrategy(
        { header:'X-AUTH-TOKEN', passReqToCallback: true },
        function(req,token, done) {
            authAtExternalAPI(token,done);
        })
    ); 
}