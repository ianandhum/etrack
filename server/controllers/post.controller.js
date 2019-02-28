var Post = require('../models/post');

module.exports = {
    
    getPosts:function(req, res) {
        Post.find().sort('-dateAdded').exec((err, posts) => {
            if (err) {
            res.status(500).send(err);
            }
            res.json({ posts });
        })
    }
};
