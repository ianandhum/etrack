var MockHostServer = require('../helpers/mock/mock.host')
var isAuthenticated = require('../helpers/auth/isAuthenticated')

module.exports=function(router,passport){
    router.route('/token-login/:token').get(passport.authenticate('login', {
        successRedirect: '/api/',
        failureRedirect: '/api/failed'
    }));
    
    router.route('/logout').get(isAuthenticated,function(req,res){
        req.logout();
        res.send({
            status:true
        })
    });
    
    if(process.env.NODE_ENV !== 'production'){
        MockHostServer(router);
    }
}