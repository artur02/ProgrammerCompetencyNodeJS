"use strict";

const BlobStorage = require('./blob');

class ProgCompServer
{	
	static get ROOTDIR(){
		return "/ProgComp/";
	}
	
	constructor(web, azure) {
		this.logger = web.logger;
		this.app = web.app;
		this.render = web.render;
		this.storage = new BlobStorage(azure, web);
	}
	
	init() {
		this.logger.info('Starting ProgComp module...');
		
		this.app.use(function *() {
			yield this.render('ProgComp/Views/index.jade', {name: "World"});
		});
	}
};

module.exports = ProgCompServer;