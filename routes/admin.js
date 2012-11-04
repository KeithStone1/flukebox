
/*
 * GET users listing.
 */

exports.signin = function(req, res){
	
  res.render('dashboard', {email: req.body.email});
};

exports.redirectToSignin = function(req, res){
	
  res.redirect('/admin/signin');
};

exports.index = function(req, res){
  res.render('index', { signinUrl: '/admin/signin' });
};