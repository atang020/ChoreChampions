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

	var navbarMargin = 70; // in pixels. Look at the bootstrap navbar-fixed-top CSS for why
	var desiredCardHeight = document.documentElement.clientHeight - (navbarMargin * 2);

	// $('.card').css('height', desiredCardHeight + 'px');

	// Flip the card when clicked
	$('.card').on('click', function onCardClicked() {
		$(this).toggleClass('flipped');
	});
	$('.reroll-chore-button').on('click', function onCardRerolled() {
		var divToDelete = '#' + $(this).attr('data-reroll');
		$(divToDelete).remove();
		// TODO: post to the server & wait for response on is-okay-to-reroll
	});

});