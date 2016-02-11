exports.viewProject = function(req, res){
  res.render('settings', {
   	'gold': 1337,
    'nextDealt': 'Tues 9:45 PST',
    'title': 'House Settings'
  });
};
