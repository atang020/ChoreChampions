var card_data = require('../card-data.json');

exports.viewProject = function(req, res){
  res.render('allchores', card_data);
};
