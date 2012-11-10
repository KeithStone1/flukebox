var adminRepository = require('../../admin/admin_repository.js');
var expectedUser = require('../../admin/user.js').user;


describe('Admin Repository', function(){
  it('should return the right username and password', function(){
    
	  var adminUser = adminRepository.getAdminCredentials();
	  expect(adminUser.email).toEqual(expectedUser.email);	
	  expect(adminUser.password).toEqual(expectedUser.password);
  });
});
	
	
