exports.viewProject = function(req, res){
  res.render('mychores', {
    'mychores': [
      {
         'name': 'Take out Trash'
      }
    ]
  });
};
