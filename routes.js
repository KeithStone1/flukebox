var admin = require('./routes/admin');
exports.getMethodRoutes = {
	'/'              : admin.redirectToSignin,
	'/admin'         : admin.redirectToSignIn,
	'/admin/signIn'  : admin.index     
};

exports.postMethodRoutes = {
	
	'/admin/signIn'  : admin.signIn     
};

var routes = function(admin){
	var self = this;
	
	self.
	
}
