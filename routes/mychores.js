var cards = require('../data/cards.json');
var user = require('../common/user-common');

exports.viewProject = function(req, res){
  res.render('mychores', {
  	'title': 'My Chores',
  	'navbar': user.getNavbarData(),
  	'username': req.cookies.username,
    'chores': user.getHand( req )
  });
};
