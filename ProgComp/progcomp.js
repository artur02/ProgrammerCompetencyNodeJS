"use strict";

class ProgCompServer
{
	constructor(app) {
		this.app = app;
	}
	
	init(){
		this.app.use(function *(){
			this.body = 'Hello World :)';
		});
	}
};

module.exports = ProgCompServer;