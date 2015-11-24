"use strict";

// var http = require('http')
// var port = process.env.PORT || 1337;
// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// }).listen(port);

var ProgCompServer = require('./ProgComp/progcomp')

var koa = require('koa');
var app = koa();
var port = process.env.PORT || 1337;
console.log("Listening on port: " + port);

var progComp = new ProgCompServer(app);
progComp.init();

// app.use(function *(){
//   this.body = 'Hello World';
// });

app.listen(port);