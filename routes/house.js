/**
 * Controller for adding/removing users to a House,
 * and manipulating House data.
 */

// TODO: Schema for this data is still TBD
var houses = require('../data/houses.json');

exports.create = function(req, res) {
	res.cookie('house', house );
	res.cookie('username', 'Bob');
	return res.redirect('/mychores');
};

exports.join = function(req, res) {
	res.cookie('house', house );
	res.cookie('username', 'Sally');
	return res.redirect('/mychores');
};