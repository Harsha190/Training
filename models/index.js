var express = require('express');
var http = require('http');
var router = express.Router();


router.get('/',function(req,res){
    res.send('Hello NodeJS...');
});

module.exports = router;
