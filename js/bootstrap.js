$(document).ready(function() {
	$(':submit').on('click', function(event) {
		event.preventDefault();

		var $button = $(this),
		$form = $button.parents('form');

		var opts = $.extend({}, $button.data(), {
			token: function(result) {
				$form.append($('<input>').attr({ type: 'hidden', name: 'stripeToken', value: result.id })).submit();
			}
		});

		StripeCheckout.open(opts);
	});

	var feed = new Instafeed({
		get: 'tagged',
		tagName: 'hotsmokybastard',
		clientId: '9d06bacabe4d4e8ba04a40abb7f0e03f',
		limit: 8, 
		after: function () {
		  var instagrams = $("#instafeed > a");
		  for (var i = 6; i < instagrams.length; i += 1) {
		    instagrams[i].remove();
		  }
		},
		resolution: 'standard_resolution'
	});
	feed.run();

});

