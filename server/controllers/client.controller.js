var Client = require('../models/client');

module.exports = {
    
    getUsers:function(req, res) {
        Client.find().exec((err, posts) => {
            if (err) {
            res.status(500).send(err);
            }
            
            res.json({ posts ,user:req.user});
        })
    }
};
