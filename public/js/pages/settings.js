'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  console.log("Javascript connected!");
  $('select').each(function(){
  	var val = $(this).attr('_default');
  	$('option[value="' + val + '"]').attr('selected','selected');
  	console.log(val);
  });
}