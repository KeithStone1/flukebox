var Admin = require('./routes/admin');

exports.routesFor = function(app, dependencies){
  registerAdminRoutesFor(app, dependencies); 
  //Root url currently set to point to admin, needs to change
  app.get('/', dependencies.admin.redirectToSignin);
};

function registerAdminRoutesFor(app,dependencies) {
  
  var admin = dependencies.admin;
  console.log("#######################################");
  console.log(admin.redirectToSignin);
  app.get('/admin', admin.redirectToSignin);
  app.get('/admin/signin', admin.index);
  app.post('/admin/signin', admin.signin);
}
