var login = require('./login');
var request = require('request')
module.exports = function(passport){

	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
        done(null,user.token);
    });

    passport.deserializeUser(function(token, done) {
        request({
                url:process.env.ANLON_API_ENDPOINT+'/session-info',
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
    });

    login(passport);

}