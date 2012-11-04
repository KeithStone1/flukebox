exports.App = function() {
	 var self = this;
	 self.getMap = {};
	 self.postMap = {};
	 
	 self.get = function(url, handler){
	 	self.getMap[url] = handler;
	 };	 
	 self.post = function(url, handler){
	 	self.postMap[url] = handler;
	 };	
};