var Location = require('../models/location');

module.exports = {
    
    getLocationHistory:function(req, res) {
        var query = null;
        if(req.method === "GET"){
            var filter = {
                _clientId:req.params.clientId
            };
            query = Location.find(filter);
        }
        else{
            query = Location.find();
        }
        query.exec((err, locationHitory) => {
            if (err) {
                res.status(500).send(err);
            }
            
                res.json({ locationHitory ,user:req.user});
        })
    },
    updateNewLocation:function (req,res) {
        if(req.method === "POST"){
            console.log(req.body);
            var body = req.body;
            var document = new Location({
                _clientId:req.user.id,
                timestamp:body.timestamp,
                location:body.new_location
            });
            document.save().then(function(result){
                res.json({
                    status:true,
                    message:"location updated successfully"
                });
            }).catch(function(error){
                console.warn("[WARN] new location could not be updated!");
                console.warn(error);
                res.json({
                    status:false,
                    message:"Could not save new location. something went wrong!"
                });

            });
        }
        else{
            console.warn("POST request is needed for update-new-location");
        }
    }
};
