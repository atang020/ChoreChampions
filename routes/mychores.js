var house = require('../common/house-common');
var user = require('../common/user-common');

exports.viewProject = function(req, res){
  if ( user.isGuest(req ) ) {
  	return res.redirect('/');
  }
  else {
  	// This is an awful hack to get around the fact that
  	// handlebars partials won't find a simple boolean...
  	var hand = user.getHand(req);
  	var wrrp = house.withinRerollPeriod(req);
<<<<<<< HEAD
    
  	return res.render('mychores', {
  		'title': 'My Chores',
  		'navbar': user.getNavbarData( req ),
  		'username': user.getName( req ),
  		'chores': hand
  	});
=======
	return res.render('mychores', {
		'title': 'My Chores',
		'navbar': user.getNavbarData(),
		'username': user.getName( req ),
		'chores': hand
	});
>>>>>>> parent of c595adb... Fixing some issues with house.next_deal and house.last_deal
  }
};
