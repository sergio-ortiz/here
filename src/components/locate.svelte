	<h1>Your location</h1>
	<span aria-busy="{!location}">{ location ? location : 'Reverse geocoding...' }</span>
	<script>
		let location = '';

		async function success({ coords: { latitude, longitude} }) {
			const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=17`);
			const reverseGeocode = await response.json();

			location = reverseGeocode.display_name;
		};

		navigator.geolocation.getCurrentPosition(success);
	</script>
