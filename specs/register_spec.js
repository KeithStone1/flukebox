var register = require('../register');
var admin = require('../routes/admin')
var App = require('./fakes/app').App;

var app = new App();

register.routesFor(app);



describe('GET /', function(){
  it('should redirect to admin/signin', function(){
    
    var handler = app.getMap['/'];
    expect(handler).toBeDefined();
    expect(handler).toEqual(admin.redirectToSignin);
  });
});

describe('GET /admin', function(){
  it('should redirect to admin/signin', function(){
    
    var handler = app.getMap['/admin'];
    expect(handler).toBeDefined();
    expect(handler).toEqual(admin.index);
  });
});

describe('GET /admin/signin', function(){
  it('should call index', function(){
    
    var handler = app.getMap['/admin/signin'];
    expect(handler).toBeDefined();
    expect(handler).toEqual(admin.index);
  });
});

describe('POST /admin/signin', function(){
  it('should post to signIn', function(){
    
    var handler = app.postMap['/admin/signin'];
    expect(handler).toBeDefined();
    expect(handler).toEqual(admin.signin);
  });
});