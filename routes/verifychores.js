var user = require('../common/user-common');
var house = require('../common/house-common');
var cardData = require('../data/cards.json');

exports.view = function(req, res) {
  
  if ( user.isGuest( req ) ) {
  	return res.redirect('/');
  }
<<<<<<< HEAD

=======
  console.log('DRAWING VERIFY CHORES PAGE');
  console.log(house.getAllCards(req));
>>>>>>> parent of c595adb... Fixing some issues with house.next_deal and house.last_deal
  res.render('verifychores', {
  	'title': 'Verify Chores',
  	'navbar': user.getNavbarData(),
    'pending': house.getAllPending(req),
    'completed': house.getAllCompleted(req)
  });

};

exports.submitForVerification = function(req, res) {
<<<<<<< HEAD

  var card = houses.getCard(req, req.body.id);
  card.status = 'pending';
  return res.redirect('/mychores');

};

exports.approve = function(req, res) {

  var card = houses.getCard(req, req.body.id);
  var house = houses.getHouseFromReq(req);
  if ( house != null ) {

    // If the card is already verified, just redirect back to verifychore
    if ( card.status === 'verified' ) {
      return res.redirect('/verifychores');
    }

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
      choreVerifier.chores_approved++;
    }
    card.belongsTo = ''; // Card now belongs to the dealer again
  }

  return res.render('verifychores', {
    'title': 'Verify Chores',
    'navbar': user.getNavbarData(req),
    'pending': houses.getAllPending(req),
    'completed': houses.getAllCompleted(req),
    'goldAwardMsg': 'Thanks, ' + choreVerifier.name + '! Here\'s ' + card.verifyBonus + ' gold for checking on ' + choreDoer + '\'s work!'
  });

};

exports.reject = function(req, res) {
  
  var card = houses.getCard(req, req.body.id);
=======
  var card = house.getCard(req, req.body.id);
  card.status = 'pending';
  return res.redirect('/verifychores');
};

exports.approve = function(req, res) {
  // TODO:  award the gold to the player
  var card = house.getCard(req, req.body.id);
  card.status = 'verified';
  card.belongsTo = ''; // Card now belongs to the dealer again
  return res.redirect('/verifychores');
};

exports.reject = function(req, res) {
  var card = house.getCard(req, req.body.id);
>>>>>>> parent of c595adb... Fixing some issues with house.next_deal and house.last_deal
  card.status = 'dealt';

  // Track how many chores this person has rejected
  var choreVerifier = houses.getUser(req);
  if ( choreVerifier != null ) {
    choreVerifier.chores_rejected++;
  }
  
  return res.redirect('/verifychores');

};