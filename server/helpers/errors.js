module.exports = {
    error500: function (req,res){
        res.status(500).send({
            "status":500,
            "message":"Internal Server Error"
        });
    },
    error404:function (req,res){
        res.status(404).send({
            "status":404,
            "message":"Not Found"
        });
    }
}
