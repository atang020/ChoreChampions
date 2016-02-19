/**
 * Controller for adding/removing users to a House,
 * and manipulating House data.
 */

// TODO: Schema for this data is still TBD
var houses = require('../common/house-common');
var user   = require('../common/user-common');

exports.create = function(req, res) {
	if ( user.isGuest( req ) ) {
		houses.create(req);
		res = houses.addUserToHouse(req, res);
	}
	return res.redirect('/mychores');
};

exports.join = function(req, res) {
	// Use req.query for GET requests, req.body for POST requests
	if ( user.isGuest( req ) ) {
		return houses.addUserToHouse(req, res);
	}
	else {
		return res.redirect('/mychores');
	}
};

exports.deal = function(req, res) {
	if ( user.isLoggedIn( req ) ) {
		houses.deal( req );
		return res.redirect('/mychores');
	}
	else {
		return res.redirect('/');
	}
}

exports.reroll = function(req, res) {
	if ( user.isLoggedIn(req) ) {
		houses.reroll(req);
		res.redirect('/mychores');
	}
	else {
		res.redirect('/');
	}
}