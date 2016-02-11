var user = require('../common/user-common');

exports.viewProject = function(req, res){
  if ( user.isGuest(req) ) {
  	return res.redirect('/');
  }
  res.render('settings', {
   	'gold': 1337,
    'nextDealt': 'Tues 9:45 PST',
    'title': 'House Settings'
  });
};
