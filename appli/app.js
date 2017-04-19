var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var index = require('./models/index');
var customers = require('./models/customers');
var orders = require('./models/orders');


var port = 4000;

var app=express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',index);
app.use('/customers',customers);
app.use('/orders',orders);

app.listen(port,function(){
    console.log('Server Started at.....'+port);
});
