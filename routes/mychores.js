var house = require('../common/house-common');
var user = require('../common/user-common');

exports.viewProject = function(req, res){
  if ( user.isGuest(req ) ) {
  	return res.redirect('/');
  }
  else {
  	var hand = user.getHand(req);
  	var wrrp = house.withinRerollPeriod(req);
  	for (var i = 0; i < hand.length; ++i) {
  		hand[i].withinRerollPeriod = wrrp;
  		hand[i].myChores = true;
  	}
	return res.render('mychores', {
		'title': 'My Chores',
		'navbar': user.getNavbarData(),
		'username': user.getName( req ),
		'chores': hand,
	});
  }
};
