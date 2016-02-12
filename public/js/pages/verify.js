'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

  // For explanation see the div.list-group in verifychroes.handlebars
  // I apologize for the sphaghetti!
  
  $('.approve-chore').click(function approveChore(){
    var name = $(this).parent().find('h4').text();
    var id = $(this).parent().find('span.hidden.id').text();
    var belongsTo = $(this).parent().find('span.belongsTo').text();
    var verifyBonus = $(this).parent().find('span.verifyBonus').text();
    console.log('POSTing an approve');
    $.post('/chores/approve', {
      name: name,
      id: id,
      belongsTo: belongsTo,
      verifyBonus: verifyBonus
    }, function(e) {
      refresh();
    });
  });

  $('.reject-chore').click(function rejectChore(){
    var name = $(this).parent().find('h4').text();
    var id = $(this).parent().find('span.hidden.id').text();
    var belongsTo = $(this).parent().find('span.belongsTo').text();
    var verifyBonus = $(this).parent().find('span.verifyBonus').text();
    console.log('POSTing a reject');
    $.post('/chores/reject', {
      name: name,
      id: id,
      belongsTo: belongsTo,
      verifyBonus: verifyBonus
    }, function(e) {
      refresh();
    });
  });

}

function refresh() {
  location.reload();
}