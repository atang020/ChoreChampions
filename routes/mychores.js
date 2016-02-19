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
		'username': user.getName( req ),
		'chores': user.getHand( req )
	});
  }
};
