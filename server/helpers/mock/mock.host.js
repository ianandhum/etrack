module.exports =function(router){
    router.route('/token/:token/is-valid').get(function(req,res){
        if(req.params.token === "1234"){
            res.send({
                status:true,
                user:{
                    name:"test_user",
                    id:1
                }
            })
        }
        else{
            res.send({
                status:false
            })
        }
    });
    
    router.route('/user/:id').get(function(req,res){
        if(req.params.id == 1){
            res.send({
                status:true,
                user:{
                    name:"test_user",
                    id:1
                }
            })
        }
        else{
            res.send({
                status:false
            })
        }
    });
}