"use strict";

class ProgCompServer
{	
	static get ROOTDIR(){
		return "/ProgComp/";
	}
	
	constructor(app, render) {
		this.app = app;
		this.render = render;
		
	}
	
	init(){
		this.app.use(function *(){
			yield this.render('ProgComp/Views/index.jade', {name: "World"});
		});
	}
};

module.exports = ProgCompServer;