
/*
 * GET users listing.
 */

exports.Admin = function(getAdminCredentials){
	var self = this;
	
  self.signin = function(req, res){
	
    var credentialsFromUI = {email: req.body.email, password : req.body.password};
    var realAdminCredentials = getAdminCredentials();
  
    if(credentialsFromUI.email == realAdminCredentials.email && credentialsFromUI.password == realAdminCredentials.password){
  	
  	  res.render('dashboard', {email: credentialsFromUI.email});
  	}
  }; 
  
  self.redirectToSignin = function(req, res){
	
    res.redirect('/admin/signin');
  };

  self.index = function(req, res){
    res.render('index', { signinUrl: '/admin/signin' });
  };
};