exports.User = function(email, password){
	
	var self = this;
	
	self.email    = email;
	self.password = password;
	
	self.equals = function(other){
		return self.email == other.email && self.password == other.password;
	};
};
