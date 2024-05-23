<script>
	let message = 'loading'

	import { onMount } from 'svelte';

	async function checkIn(location) {
		message = "checking in";
		
		const timestamp = Date();

		const response = await fetch('/checkIn.json', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ location, timestamp }),
		});

		const data = await response.json();
		message = data.message;
	}

	async function success({ coords: { latitude, longitude } }) {
		message = 'reverse geocoding';

		const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=18`);
		const reverseGeocode = await response.json();

		checkIn(reverseGeocode.display_name);
	};

	onMount(() => {
		message = 'getting position';
		navigator.geolocation.getCurrentPosition(success, null, { enableHighAccuracy: true });
	});
</script>

<h1 aria-busy={ message !== 'success' }>{ message }</h1>
