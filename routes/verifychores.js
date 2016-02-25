var user = require('../common/user-common');
var houses = require('../common/house-common');
var cardData = require('../data/cards.json');

exports.view = function(req, res) {
  if ( user.isGuest( req ) ) {
  	return res.redirect('/');
  }
  console.log('DRAWING VERIFY CHORES PAGE');
  console.log(houses.getAllCards(req));
  res.render('verifychores', {
  	'title': 'Verify Chores',
  	'navbar': user.getNavbarData(req),
    'pending': houses.getAllPending(req),
    'completed': houses.getAllCompleted(req)
  });
};

exports.submitForVerification = function(req, res) {
  var card = houses.getCard(req, req.body.id);
  card.status = 'pending';
  return res.redirect('/mychores');
};

exports.approve = function(req, res) {
  var card = houses.getCard(req, req.body.id);
  var house = houses.getHouseFromReq(req);
  if ( house != null ) {
    card.status = 'verified';

    // Person who submitted the chore should get their gold once it is confirmed
    var choreDoer = houses.getUser(req, card.belongsTo);
    if ( choreDoer != null ) {
      choreDoer.gold += card.reward + card.bounty;
      card.bounty = 0; // Reset the card bounty
    }

    // Person who verifies a chore gets some gold for doing that
    var choreVerifier = houses.getUser(req);
    if ( choreVerifier != null ) {
      choreVerifier.gold += card.verifyBonus;
    }
    card.belongsTo = ''; // Card now belongs to the dealer again
  }
  return res.redirect('/verifychores');
};

exports.reject = function(req, res) {
  var card = houses.getCard(req, req.body.id);
  card.status = 'dealt';
  return res.redirect('/verifychores');
};