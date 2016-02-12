'use strict';

var GOLD = 1337;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

  // TODO: Remove the Oz
  console.log("Javascript connected!");
  $(".store-item").click(function(){
  	var item = $(this).parent().find('h1.text-center').text();
  	var price = Number.parseInt( $(this).parent().find('input.price-hack').val() );
  	// console.log('item: ' + item);
  	// console.log('price: ' + price)
  	var yes = confirm("Buy this item for " + price + " gold?");
  	if ( yes == true ) {
  		if ( GOLD - price < 0 ) {
  			alert("Sorry, you don't have enough gold yet.");
  		}
  		else {
  			alert("Purchased 1 x " + item + '!' );
  			GOLD -= price;
  		}
  	}
  });
}