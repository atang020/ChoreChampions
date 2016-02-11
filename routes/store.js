var user = require('../common/user-common');

exports.viewProject = function(req, res){
  res.render('store', {
    'title': 'Store',
    'navbar': user.getNavbarData(),
    'inventory': [
      {
        'name': 'Re-Roll',
        'description': 'Trade in a chore for a chance to get another.',
        'price' : 1000,
        'id' : 'reroll'
      },
      {
      	'name' : 'Week Off',
        'description': "Let the plebeians do it.",
      	'price' : 120000,
        'id' : 'weekoff'
      }
    ]
  });
};