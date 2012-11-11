var Admin    = require('../../routes/admin').Admin;
var Response = require('../fakes/response').Response;


  

describe("Index", function(){
  it("should render the index view", function(){
  	 var request  = {} 
  	 var response = new Response();
  	 
  	 var admin = new Admin();
  	 admin.index(request, response);
  	 
  	 expect(response.isRendered).toBeTruthy();
  	 expect(response.view).toEqual("index");
  	 expect(response.model.signinUrl).toEqual("/admin/signin");
  });	
	
});

describe("Signin", function(){
  it("should sign in and render the dashboard view if credentials are correct", function(){
  	 var request  = {body : {email: "a@b.com", password: "password"}} 
  	 var response = new Response();
  	 
  	 var getAdminCredentialsWasCalled = false;
  	 var getAdminCredentials = function () {
  	 	getAdminCredentialsWasCalled = true;
  	 	return {email:"a@b.com", password : "password"};
  	 };
  	 var admin = new Admin(getAdminCredentials);
  	
  	 admin.signin(request, response);
  	 
  	 expect(getAdminCredentialsWasCalled).toBeTruthy();
  	 expect(response.isRendered).toBeTruthy();
  	 expect(response.view).toEqual("dashboard");
  	 expect(response.model.email).toEqual("a@b.com");
  });	
  
  it("should not sign in and render the error view if email is incorrect", function(){
  	 var request  = {body : {email: "a@b.com", password: "password"}} 
  	 var response = new Response();
  	 
  	 var getAdminCredentialsWasCalled = false;
  	 var getAdminCredentials = function () {
  	 	getAdminCredentialsWasCalled = true;
  	 	return {email:"b@c.com", password : "password"};
  	 };
  	 var admin = new Admin(getAdminCredentials);
  	
  	 admin.signin(request, response);
  	 
  	 expect(getAdminCredentialsWasCalled).toBeTruthy();
  	 expect(response.isRendered).toBeTruthy();
  	 expect(response.view).toEqual("signinerror");
  	 expect(response.model.message).toEqual("The credentials you entered seem to be incorrect");
  });
	
});

describe("Redirect", function(){
  it("should redirect the reponse to /admin/signIn", function(){
  	
  	 var response = new Response();
  	 
  	 var admin = new Admin();
  	 admin.redirectToSignin({}, response);
  	 
  	 expect(response.isRedirected).toBeTruthy();
  	 expect(response.redirectUrl).toEqual("/admin/signin");
  });		
	
});
