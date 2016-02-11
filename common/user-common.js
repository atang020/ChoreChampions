/**
 * Generic common login for dealing with user's and user data.
 * I guess technically a lot of this should be in a model too,
 * but for now it's okay.
 *
 * There's a lot of wizard-of-Oz ing going on here.
 */

var HOUSE_COOKIE_NAME = 'house';
var USER_COOKIE_NAME = 'username';

var cardData = require('../data/cards.json');

module.exports.isGuest = isGuest;
module.exports.isLoggedIn = isLoggedIn;
module.exports.getCookieInfo = getCookieInfo;
module.exports.getNavbarData = getNavbarData;

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

function getNavbarData( req ) {
	// This will eventually figure out which user is logged in,
	// by inspecting the cookies/session. For now, it's just
	// an easy way to pass dummy data into the navbar renderer.
	return {
		gold: 1337,
		nextDeal: 'Fri Feb 31st, 4:20 PM'
	};
}

module.exports.getHand = function( req ) {
	// Returns the current user's hand.
	if ( isGuest(req ) ) {
		return {};
	}
	else {
		user = req.cookies[USER_COOKIE_NAME];
		hand = [];
		for (var i = 0; i < cardData.cards.length; ++i ) {
			var card = cardData.cards[i];
			if ( card.belongsTo == user ) {
				hand.push(card);
			}
		}
		return hand;
	}
}