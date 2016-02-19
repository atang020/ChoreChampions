var house = require('../common/house-common');
var user = require('../common/user-common');

exports.viewProject = function(req, res) {
  if ( user.isGuest( req ) ) {
  	return res.redirect('/');
  }
  res.render('allchores', {
  	title: 'All Chores',
  	navbar: user.getNavbarData(),
  	cards: house.getAllCards( req )
  });
};
