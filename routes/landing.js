/**
 * The controller for the landing page.
 * Users are redirected here if they have not had their
 * cookies set yet. 
 *
 * This page also allows them to create/join a house.
 */

var user = require('../middleware/login-redirect');

exports.view = function(req, res) {
	if ( user.isLoggedIn( req ) ) {
		// If we're logged in (e.g. the cookie exists)
		// then redirect to the home page.
		res.redirect('/home');
	}
	// console.log(req.cookies);
	return res.render('landing', {

	});
};