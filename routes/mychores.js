var cards = require('../data/cards.json');

exports.viewProject = function(req, res){
  res.render('mychores', {
    'name': 'Take out Trash'
  });
};
