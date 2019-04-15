var login = require('./login');
var request = require('request')
module.exports = function(passport){

	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
        console.log('serializing user: ');console.log(user);
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        request(process.env.ANLON_API_ENDPOINT+'/user/'+id, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var userInfo = JSON.parse(body);
                if(userInfo.status){
                    return done(null, userInfo.user); 
                }
            }
            return done(null,false);
        })
    });

    login(passport);

}