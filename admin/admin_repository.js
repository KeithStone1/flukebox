var admin = require("./user.js");

exports.getAdminCredentials = function() {
	return admin.user;
}


