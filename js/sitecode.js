$(function () {
  // HA!
  $(window).konami( function () {
    var markup = '<div class="konami"><p>RUBY</p>';
    markup += '<p class="secret"><code>Level.unlock(:bonus => "konami")</code></p>';
    markup += '</div>'
    $("#page").fadeOut();
    $("body").append(markup);
    setTimeout(function () { $(".konami").fadeIn(); }, 1500);
  });
});

function createMap(el, address) {
	var geocoder,
	geocoder = new google.maps.Geocoder(),
	latlng = new google.maps.LatLng(41.3081, -72.9286),
	mapOptions = {
		zoom: 14,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	},
	map = new google.maps.Map(el, mapOptions);

	geocoder.geocode( {'address': address}, function (results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
			var marker;

			map.setCenter(results[0].geometry.location);
			marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location
			});
		} else {
			//alert("Geocode was not successful for the following reason: " + status);
		}
	});
}

function findAndCreateMap($parent) {
	var $el = $($parent.find('[data-address]'));
	createMap($el[0], $el.data('address'));
}

$(function () {
	$('.collapse').on('shown', function () {
		findAndCreateMap($(this));
	});

  findAndCreateMap($('#collapseOne'));
});
