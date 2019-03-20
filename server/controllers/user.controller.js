var User = require('../models/user');

module.exports = {
    
    getUsers:function(req, res) {
        User.find().exec((err, posts) => {
            if (err) {
            res.status(500).send(err);
            }
            res.json({ posts });
        })
    }
};
