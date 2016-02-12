var user = require('../common/user-common');

exports.viewProject = function(req, res){
  if ( user.isGuest(req) ) {
  	return res.redirect('/');
  }
  res.render('settings', {
   	'navbar': user.getNavbarData(),
    'title': 'House Settings'
  });
};
