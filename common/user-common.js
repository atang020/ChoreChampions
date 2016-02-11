/**
 * Generic common login for dealing with user's and user data.
 * I guess technically a lot of this should be in a model too,
 * but for now it's okay.
 */

var HOUSE_COOKIE_NAME = 'house';
var USER_COOKIE_NAME = 'username';

module.exports.isGuest = isGuest;
module.exports.isLoggedIn = isLoggedIn;
module.exports.getCookieInfo = getCookieInfo;

function isGuest( req ) {
	if ( req.cookies === undefined ||
		 req.cookies.house === undefined ) {
		return true;
	}
	else {
		return false;
	}
}

function isLoggedIn( req ) {
	return !isGuest( req );
}

function getCookieInfo( req ) {
	if ( isGuest( req ) ) {
		return {
			house: undefined,
			username: undefined
		};
	}
	else {
		return {
			house: req.cookies.house,
			username: req.cookies.username
		};
	}
}