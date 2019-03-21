var CustomStrategy   = require('passport-custom').Strategy;
var request = require('request');

module.exports = function(passport){
    
    passport.use('login', new CustomStrategy(
        function(req, done) {
            request(process.env.ANLON_API_ENDPOINT+'/token/'+ req.params.token +'/is-valid', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var userInfo = JSON.parse(body);
                    if(userInfo.status){
                        return done(null, userInfo.user); 
                    }
                }
                return done(null,false);
            })
        })
    ); 
}