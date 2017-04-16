var express = require('express');
var http = require('http');
var router = express.Router();


router.get('/all',function(req,res){
    url = "http://localhost:8080/orders/all";
    req = http.get(url,function(response){
        var buffer = "",
        data,
        route;

        response.on("data", function(stream){
            buffer += stream;
        });

        response.on("end", function(err){
            data = JSON.parse(buffer);
            res.json(data);
        });
    });
});

router.get('/one/:id',function(req,res){
    url = "http://localhost:8080/orders/order?id="+req.params.id;
    req = http.get(url,function(response){
        var buffer = "",
        data,
        route;

        response.on("data",function(stream){
            buffer += stream;
        });

        response.on("end",function(err){
            data = JSON.parse(buffer);
            res.json(data);
        });
    });
});

module.exports = router;
