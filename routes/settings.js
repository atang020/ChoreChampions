var user = require('../common/user-common');
var house = require('../common/house-common');

exports.viewProject = function(req, res){
  if ( user.isGuest(req) ) {
  	return res.redirect('/');
  }
  // TODO: Do server-side validation to make sure the user ACTUALLY
  //       belongs to the house we received from the cookie. OTherwise
  //       people can just spoof cookies and mess with other people's houses.
  var myHouse = house.getHouseFromReq( req );
  res.render('settings', {
   	'navbar': user.getNavbarData(),
    'title': 'House Settings',
    'name': myHouse.name,
    'code': myHouse.code
  });
};
