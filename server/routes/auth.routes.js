var MockHostServer = require('../helpers/mock/mock.host')
var isAuthenticated = require('../helpers/auth/isAuthenticated')

module.exports=function(router,passport){
    router.route('/token-login/:token').get(
        function (req,res,next) {
            passport.authenticate('SessionMethod',function(err, user, info) {
                if (err) { return next(err); }
                if (!user) { 
                    return res.send(JSON.stringify({
                        status:false,
                        message:"Unauthorized"
                    }));
                }
                req.login(user, function(err) {
                    if (err) { return next(err); }
                    return res.json({
                        status:true,
                        message:"Session Started"
                    });
                });
            })(req, res, next);
        }
    );

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