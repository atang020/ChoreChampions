var user = require('../common/user-common');
var cardData = require('../data/cards.json');
var choresDB = require('../data/choresDB.json');

exports.viewProject = function(req, res) {
  if ( user.isGuest( req ) ) {
  	return res.redirect('/');
  }
  console.log('DRAWING VERIFY CHORES PAGE');
  console.log(choresDB);
  res.render('verifychores', {
  	'title': 'Verify Chores',
  	'navbar': user.getNavbarData(),
    'pending': choresDB.pending,
    'completed': choresDB.completed
  });
};

exports.submitForVerification = function(req, res) {
  var obj = {
    name:         req.body.name,
    id:           req.body.id,
    belongsTo:    req.body.belongsTo,
    verifyBonus:  req.body.verifyBonus
  };
  console.log('SUBMITTED FOR VERIFCATION');
  console.log(  req.body);
  choresDB.pending.push(obj);
  return res.redirect('/verifychores');
};

exports.approve = function(req, res) {
  var obj = {
    name:         req.body.name,
    id:           req.body.id,
    belongsTo:    req.body.belongsTo,
    verifyBonus:  req.body.verifyBonus
  };
  choresDB.completed.push(obj);
  return res.redirect('/verifychores');
};

exports.reject = function(req, res) {
  var obj = {
    name:         req.body.name,
    id:           req.body.id,
    belongsTo:    req.body.belongsTo,
    verifyBonus:  req.body.verifyBonus
  };
  for (var i = 0; i < choresDB.pending.length; ++i ) {
    var temp = choresDB.pending[i];
    if ( temp == obj ) {
      choresDB.pending.splice(i, 1); // delete this from the reject list
      break;
    }
  }
  return res.redirect('/verifychores');
};