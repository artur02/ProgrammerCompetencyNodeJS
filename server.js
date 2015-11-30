"use strict";

const ProgCompServer = require('./ProgComp/progcomp')

const nconf = require('nconf');
const views = require('koa-views');
const koa = require('koa');
const app = koa();
const storage = require('azure-storage');
const winston = require('winston');

// Configuration setup
nconf
    .env()
    .file({ file: 'config.json', search: true })
    .defaults({
      'PORT': 1337
    });

const logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({ filename: 'serverlog.log' })
    ]
  });
  
logger.info('Application starting...');

// Rendering engine setup
var render = views('', {
  map: {
    html: 'jade',
    jade: 'jade'
  }
});
app.use(render);

logger.info('Renderer configured');

// Programmer competency application
const progComp = new ProgCompServer(
  { app: app, 
    render: render,
    config: nconf,
    logger: logger
  }, 
  {
    storage: storage,
  });
progComp.init();

// Start server
logger.info('Server starting...');
const port = nconf.get('PORT');
app.listen(port);
logger.info("Listening on port %d", port);