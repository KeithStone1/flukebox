var Admin = require('./routes/admin').Admin;
var adminRepository = require('./admin/admin_repository');

exports.admin = new Admin(adminRepository.getAdminCredentials);
