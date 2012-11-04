exports.Response = function(){
	var self = this;
	self.view = undefined;
	self.model = undefined;
	self.isRendered = false;
	self.isRedirected = false;
	
	self.render = function(view, model) {
		self.view = view;
		self.model = model;
		self.isRendered = true;
	};
	
	self.redirect = function(url) {
		self.isRedirected = true;
		self.redirectUrl = url;
		
	};
};