// web.js
var express = require("express");
var util = require('util');
var path = require('path');
var app = express();

//add some standard express middleware
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.write('<html><head><title>I am the night sky.</title><link href="/css/style.css" rel="stylesheet" type="text/css"></head>\
    <body><img src="/img/mitchmoon.png" /></body></html>');
    res.end();
});

var port = Number(process.env.PORT || 8081);
app.listen(port, function () {
    console.log("Listening on " + port);
});