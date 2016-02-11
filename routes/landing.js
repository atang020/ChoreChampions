/**
 * The controller for the landing page.
 * Users are redirected here if they have not had their
 * cookies set yet. 
 *
 * This page also allows them to create/join a house.
 */

var user = require('../common/user-common');
var houses = require('../data/houses.json')

exports.view = function(req, res) {
	if ( user.isLoggedIn( req ) ) {
		// If we're logged in (e.g. the cookie exists)
		// then redirect to the home page.
		return res.redirect('/mychores');
	}
	// console.log(req.cookies);
	return res.render('landing', {
		'title': 'Chore Champions',
		'navbar': user.getNavbarData()
	});
};