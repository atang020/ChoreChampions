'use strict';
/**
 * card-util.js
 *
 * Included on multiple pages across this site, it
 * provides functionality for interacting with cards.
 * Hopefully more than flipping them, eventually.
 */

$(document).on('ready', function cardUtilOnReady() {

	console.log('Loaded card-util.js');

	// Flip the card when clicked
	$('.card').on('click', function onCardClicked() {
		$(this).toggleClass('flipped');
	});

});