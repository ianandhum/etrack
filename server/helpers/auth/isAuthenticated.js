module.exports = function (req, res, next) {
	if (req.isAuthenticated())
        return next();
    //not loggedin
	res.redirect('/api/not-logged');
}
