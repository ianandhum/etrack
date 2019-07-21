module.exports = function (req, res, next) {
	if (req.isAuthenticated())
        return next();
    //not loggedin

    res.status(401).json({
        status:false,
        message:"Unauthorized"
    });
}
