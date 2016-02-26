var user = require('../common/user-common');
var house = require('../common/house-common');

exports.view = function(req, res) {
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
    'code': myHouse.code,
    'deal_day': myHouse.settings.deal_day,
    'deal_time': myHouse.settings.deal_time,
    'users': myHouse.users
  });
};

exports.update = function(req, res) {
  if ( user.isGuest(req) ) {
    return res.redirect('/');
  }
  // TODO:      Lol we seriously need to validation here...
  var myHouse = house.getHouseFromReq( req );
  var users = [];
  for (var i = 0; i < myHouse.users.length; ++i) {
    if ( i != req.cookies.userid ) {
      users.push( myHouse.users[i] )
    }
  }

  myHouse.name = req.body.name;
  myHouse.settings.deal_day = req.body.deal_day;
  myHouse.settings.deal_time = req.body.deal_time;

  res.render('settings', {
    'navbar': user.getNavbarData(),
    'title': 'House Settings',
    'name': myHouse.name,
    'code': myHouse.code,
    'deal_day': myHouse.settings.deal_day,
    'deal_time': myHouse.settings.deal_time,
    'users': users,
    'alert': 'Settings saved!'
  })
};