/**
 * Generic common login for dealing with user's and user data.
 * I guess technically a lot of this should be in a model too,
 * but for now it's okay.
 *
 * There's a lot of wizard-of-Oz ing going on here.
 */

var HOUSE_COOKIE_NAME = 'code';
var USER_COOKIE_NAME = 'name';
var USER_COOKIE_ID = 'userid';
var SUPPRESS_TUTORIAL = 'suppress-tutorial';

var cardData = require('../data/cards.json');
var houses   = require('../common/house-common');

module.exports.isGuest = isGuest;
module.exports.isLoggedIn = isLoggedIn;
module.exports.getCookieInfo = getCookieInfo;
module.exports.getNavbarData = getNavbarData;

function isGuest( req ) {
	if ( req.cookies === undefined ||
		 req.cookies[HOUSE_COOKIE_NAME] === undefined ) {
		return true;
	}
	else if ( houses.getHouseFromReq( req ) == null ) {
		// If we are "logged in" to a house that doesn't
		// exist, we aren't REALLY logged in.
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
			code: undefined,
			name: undefined,
			userid: undefined
		};
	}
	else {
		return {
			code: req.cookies.code,
			name: req.cookies.name,
			userid: req.cookies.userid
		};
	}
}

function getNavbarData( req ) {
	// This will eventually figure out which user is logged in,
	// by inspecting the cookies/session. For now, it's just
	// an easy way to pass dummy data into the navbar renderer.
	return {
		gold: 1337,
		nextDeal: 'Fri Feb 31st, 4:20 PM'
	};
}

module.exports.getName = function( req ) {
	return req.cookies[USER_COOKIE_NAME];
}

module.exports.getID = function( req ) {
	return req.cookies[USER_COOKIE_ID];
}

module.exports.getHand = function( req ) {
	// Returns the current user's hand.
	if ( isGuest(req ) ) {
		return {};
	}
	else {
		var userid = req.cookies[USER_COOKIE_ID];
		var hand = [];
		var cards = houses.getAllCards( req ).cards;
		for (var i = 0; i < cards.length; ++i ) {
			var card = cards[i];
			// Card states:
			//  'dealt', 'undealt', 'pending', 'verified'
			if ( card.belongsTo == userid ) {
				if ( card.status == 'dealt' ) {
					hand.push(card);
				}
			}
		}
		return hand;
	}
}