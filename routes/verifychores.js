var user = require('../common/user-common');

exports.viewProject = function(req, res) {
  if ( user.isGuest( req ) ) {
  	return res.redirect('/');
  }
  res.render('verifychores', {
  	'title': 'Verify Chores',
  	'navbar': user.getNavbarData(),
    'verifychores': [
      {
	     'name': 'Take out Trash'
      }
    ]
  });
};
