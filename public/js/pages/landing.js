/**
 * Landing page. Shows/hides the forms for create/joining
 * a house.
 */

$(document).on('ready', function() {

	// TODO: This is really hardcoded and there's a better way
	$('#create-btn').click(function() {
		$('#create-form').toggleClass('hidden');
		$('#create-form').toggleClass('show');
		if ( $('#join-form').hasClass('show') ) {
			$('#join-form').removeClass('show');
			$('#join-form').addClass('hidden');
		}
	});
	$('#join-btn').click(function() {
		$('#join-form').toggleClass('hidden');
		$('#join-form').toggleClass('show');
		if ( $('#create-form').hasClass('show') ) {
			$('#create-form').removeClass('show');
			$('#create-form').addClass('hidden');
		}
	});

	$('#info-hl').click(function() {
		ga("send", "event", "info", "click");
	});

	$('#next-btn').click(function() {
		ga("send", "event", "next", "click");
	});


});