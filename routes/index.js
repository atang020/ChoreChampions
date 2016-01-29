
/*
 * GET home page.
 */

exports.view = function(req, res) {
  // Crappy hardcoded demo data
  res.render('index', {
    gold: 1337,
    nextDealt: 'Tues 9:45 PST',
    chores: {
      count: 28,
      mine: 4,
      unverified: 10
    }
  });
};