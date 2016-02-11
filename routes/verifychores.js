var user = require('../common/user-common');

exports.viewProject = function(req, res){
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
