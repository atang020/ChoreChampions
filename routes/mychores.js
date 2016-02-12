var cards = require('../data/cards.json');
var user = require('../common/user-common');

exports.viewProject = function(req, res){
  if ( user.isGuest(req ) ) {
  	return res.redirect('/');
  }
  else {
	return res.render('mychores', {
		'title': 'My Chores',
		'navbar': user.getNavbarData(),
		'username': req.cookies.username,
		'chores': user.getHand( req )
	});
  }
};
