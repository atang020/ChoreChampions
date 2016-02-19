/**
 * this will eventually become the model for Houses.
 * It is used to populate house objects with users,
 * cards, etc.
 *
 *
 * NOTES:
 *
 *   Since houses now contain all the card data, we are
 * now using "cards.json" as seed data for houses. Cards
 * can be in any of the following 4 states:
 *
 *   'undealt'    Card belongs to the Dealer
 *   'dealt'      Card belongs to a user
 *   'pending'    Chore is pending verification, 
 *                not in anyone's hand
 *   'verified'   Chore has been verified and will return
 *                to the dealer on the next deal cycle.
 */

var DEFAULT_GOLD = 0;
var DEFAULT_REROLLS = 1;
var houseDB = require('../data/houses.json');
var cardData = require('../data/cards.json');

module.exports.create = create;
module.exports.addUserToHouse = addUserToHouse;
module.exports.getNewHouseCode = getNewHouseCode;
module.exports.getHouse = getHouse;
module.exports.getHouseFromReq = getHouseFromReq;

function getHouse( houseCode ) {
	for ( var i = 0; i < houseDB.houses.length; ++i ) {
		var tmp = houseDB.houses[i];
		if ( tmp.code == houseCode ) {
			return tmp;
		}
	}
	return null;
};

function getHouseFromReq( req ) {
	var code = req.cookies.code;
	return getHouse(code);
}

function create( req ) {
	// Search to see if the house exists. Creates a new house.
	var code = req.body.code || req.query.code || '';
	var beds = req.body.beds || req.query.beds || '';
	var baths = req.body.baths || req.query.baths || '';
	var house = getHouse(code);
	if ( house == null ) {
		var newHouse = {
			code: code,
			name: "Unamed House",
			users: [],
			bathrooms: beds,
			bedrooms: baths,
			settings: {
				'free_rerolls_per_week': 1,
				'deal_day': 'Sunday',
				'deal_time': '8am'
			},
			cards: cardData
		};
		houseDB.houses.push(newHouse);
	}
	else {
		// If the house already exists, just add this user to that house.
		throw "This house already exists!"
	}
};

function addUserToHouse(req, res) {
	// Adds the requested user to the house, and logs him/her in
	// via cookie. If the house does not exist, then we are redirected
	// back to the
	var code   = req.query.code || req.body.code || '';
	var name = req.query.name  || req.body.name  || '';
	var userid = -1;

	try {
		var houseData = getHouse(code);
		userid = houseData.users.length;
		houseData.users.push({
			name: name,
			userid: userid,
			gold: DEFAULT_GOLD,
			rerolls: DEFAULT_REROLLS
		});
	}
	catch (e) {
		console.log("ERROR! HOUSE CODE DOESN'T EXIST!");
		return res.render('landing', {
			'error': "A house with the given code does not exist."
		});
	}

	res.cookie('code', code );
	res.cookie('name', name );
	res.cookie('userid', userid);

	return res.redirect('/mychores');
}

function getAllCards( req ) {
	var house = getHouseFromReq( req );
	if ( house != null ) {
		return house.cards;
	}
};
module.exports.getAllCards = getAllCards;

function getNewHouseCode() {
	var strlen = 6;
	var validChars = [
	'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
	'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
	's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', 
	'1', '2', '3', '4', '5', '6', '7', '8', '9' ];

	// TODO: Let database do this. This is obviously a race condition
	var houseCode = "";
	do {
		houseCode = "";
		for (var i = 0; i < strlen; ++i ) {
			var letter = Math.floor(Math.random() * validChars.length) % (validChars.length);
			houseCode += validChars[letter];
		}
	} while ( getHouse(houseCode) != null );
	console.log('Generated Random House Code: ' + houseCode);
	return houseCode;
}