var user = require('../common/user-common');
var house = require('../common/house-common');
var cardData = require('../data/cards.json');

exports.view = function(req, res) {
  if ( user.isGuest( req ) ) {
  	return res.redirect('/');
  }
  console.log('DRAWING VERIFY CHORES PAGE');
  console.log(house.getAllCards(req));
  res.render('verifychores', {
  	'title': 'Verify Chores',
  	'navbar': user.getNavbarData(),
    'pending': house.getAllPending(req),
    'completed': house.getAllCompleted(req)
  });
};

exports.submitForVerification = function(req, res) {
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
  card.status = 'dealt';
  return res.redirect('/verifychores');
};