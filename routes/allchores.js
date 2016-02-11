var card_data = require('../data/cards.json');

exports.viewProject = function(req, res){
  res.render('allchores', card_data);
};
