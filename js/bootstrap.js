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

	$('#qty-select').on('change', function(e) {
		var qty = $(this).val(),
			amt = qty * 550,
			postage = 350,
			vals = ['one', 'two', 'three', 'four', 'five'];

		if (qty > 3) {
			postage = 540;
		}

		var qty_string = qty + ' bottle';
		qty_string += (qty > 1) ? 's' : '';

		var postage_string = (postage / 100).toFixed(2);
		var amt_string = (amt / 100).toFixed(2);

		$('#buy-btn').data('amount', amt + postage);
		$('#amount').val(amt + postage);
		$('#buy-btn').data('description', '£' + amt_string + ' for some damn good hotsauce.');
		$('#buy-btn').val('Buy ' + vals[qty - 1] + ' – £' + amt_string + ' + £' + postage_string + ' postage');
	});

});

