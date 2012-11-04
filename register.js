var admin = require('./routes/admin');
 
exports.routesFor = function(app){
  registerAdminRoutesFor(app); 
  //Root url currently set to point to admin, needs to change
  app.get('/', admin.redirectToSignin);
};

function registerAdminRoutesFor(app) {
  app.get('/admin', admin.redirectToSignin);
  app.get('/admin/signin', admin.index);
  app.post('/admin/signin', admin.signin);
}
