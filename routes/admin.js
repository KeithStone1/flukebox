var User = require('../domain/user').User;
/*
 * GET users listing.
 */

exports.Admin = function(getAdminCredentials){
	var self = this;
	
  self.signin = function(req, res){
	
    var credentialsFromUI = new User(req.body.email, req.body.password);
    var realAdminCredentials = getAdminCredentials();
  
    if(credentialsFromUI.equals(realAdminCredentials)){
  	
  	  res.render('dashboard', {email: credentialsFromUI.email});
  	  return;
  	}
  	
  	res.render('signinerror', {message: "The credentials you entered seem to be incorrect"});
  	
  }; 
  
  self.redirectToSignin = function(req, res){
	
    res.redirect('/admin/signin');
  };

  self.index = function(req, res){
    res.render('index', { signinUrl: '/admin/signin' });
  };
};