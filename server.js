"use strict";

const ProgCompServer = require('./ProgComp/progcomp')

const views = require('koa-views');
const koa = require('koa');
const app = koa();

const port = process.env.PORT || 1337;

var render = views('', {
  map: {
    html: 'jade',
    jade: 'jade'
  }
});
app.use(render);



// app.use(function* (next) {
//   yield this.render('ProgComp/Views/index.jade');
// });

const progComp = new ProgCompServer(app, render);
progComp.init();

app.listen(port);
console.log("Listening on port: %d", port);