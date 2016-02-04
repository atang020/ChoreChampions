/**
 * TODO: this is really a bad name.
 */

var house = "HARDCODED BS";

exports.create = function(req, res) {
	res.cookie('house', house );
	res.cookie('username', 'Bob');
	return res.redirect('/home');
};

exports.join = function(req, res) {
	res.cookie('house', house );
	res.cookie('username', 'Sally');
	return res.redirect('/home');
};