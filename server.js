"use strict";

const ProgCompServer = require('./ProgComp/progcomp')

const koa = require('koa');
const app = koa();
const port = process.env.PORT || 1337;


const progComp = new ProgCompServer(app);
progComp.init();

app.listen(port);
console.log("Listening on port: " + port);