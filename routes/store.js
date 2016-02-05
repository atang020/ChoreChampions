exports.viewProject = function(req, res){
  res.render('store', {
    'gold': 1337,
    'nextDealt': 'Tues 9:45 PST',
    'inventory': [
      {
        'name': 'Buy a ReRoll',
        'price' : 1000,
        'id' : 'reroll'
      },
      {
      	'name' : 'Buy a Week Off',
      	'price' : 120000,
        'id' : 'weekoff'
      }
    ]
  });
};

