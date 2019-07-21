module.exports=function(passport){
    return function (req,res,next) {
        passport.authenticate('HeaderMethod',function(err, user, info) {
            if (err) { return next(err); }
            if (!user) { 
                return res.send(JSON.stringify({
                    status:false,
                    message:"Unauthorized"
                }));
            }
            req.login(user, function(err) {
                if (err) { return next(err); }
                next();
            });
        })(req, res, next);
    };
}