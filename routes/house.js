/**
 * Controller for adding/removing users to a House,
 * and manipulating House data.
 */

// TODO: Schema for this data is still TBD
var houses = require('../data/houses.json');

exports.create = function(req, res) {
	var house = req.query.house || '';
	var username = req.query.username || '';
	res.cookie('house', house );
	res.cookie('username', username );
	return res.redirect('/mychores');
};

exports.join = function(req, res) {
	var house = req.query.house || '';
	var username = req.query.username || '';
	res.cookie('house', house );
	res.cookie('username', username );
	return res.redirect('/mychores');
};