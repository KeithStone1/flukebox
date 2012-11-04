var admin    = require('../../routes/admin');
var Response = require('../fakes/response').Response;
  

describe("Index", function(){
  it("should render the index view", function(){
  	 var request  = {} 
  	 var response = new Response();
  	 admin.index(request, response);
  	 
  	 expect(response.isRendered).toBeTruthy();
  	 expect(response.view).toEqual("index");
  	 expect(response.model.signinUrl).toEqual("/admin/signin");
  });	
	
});

describe("Signin", function(){
  it("should render the dashboard view", function(){
  	 var request  = {body : {email: "a@b.com"}} 
  	 var response = new Response();
  	 admin.signin(request, response);
  	 
  	 expect(response.isRendered).toBeTruthy();
  	 expect(response.view).toEqual("dashboard");
  	 expect(response.model.email).toEqual("a@b.com");
  });	
	
});

describe("Redirect", function(){
  it("should redirect the reponse to /admin/signIn", function(){
  	
  	 var response = new Response();
  	 admin.redirectToSignin({}, response);
  	 
  	 expect(response.isRedirected).toBeTruthy();
  	 expect(response.redirectUrl).toEqual("/admin/signin");
  });		
	
});
