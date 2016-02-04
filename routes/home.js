/*
 * GET the home page for Chore Champions.
 * Not to be confused with "house.js" which controls
 * configuring/creating/joining a house (e.g. setting
 * up the game or logging in for the first time.)
 *
 * Yeah, I know it's a bad name but it's late.
 */

var user = require('../middleware/login-redirect');

exports.view = function(req, res) {
  if ( user.isGuest( req ) ) {
    return res.redirect('/');
  }
  // Crappy hardcoded demo data
  return res.render('home', {
    gold: 1337,
    nextDealt: 'Tues 9:45 PST',
    chores: {
      count: 28,
      mine: 4,
      unverified: 10
    }
  });
};