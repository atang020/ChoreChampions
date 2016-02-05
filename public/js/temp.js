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
}

$(".fubar").click(function(){
  alert("Are you sure you want to buy?");
});

$(".saveChanges").click(function(){
  alert("Settings Changed!");
});
