<script>
	import { onMount } from 'svelte';

	let location = '';

	async function success({ coords: { latitude, longitude } }) {
		const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=17`);
		const reverseGeocode = await response.json();

		location = reverseGeocode.display_name;
	};

	onMount(() => {
		navigator.geolocation.getCurrentPosition(success);
	});

	import Location from './location.svelte';

	let authorized;

	async function checkIn() {
		const response = await fetch('/checkIn.json');
		const data = await response.json();
		authorized = data.value;
	}

	import SignIn from './signIn.svelte';

	function isAuthorized(data) {
		authorized = data.value;
	}
</script>

{#if authorized === 'true'}
	<Location location={location} />
{:else if authorized === 'false'}
	<SignIn isAuthorized={isAuthorized} />
{:else}
	<h1>Press the Check-In button below</h1>
	<button on:click={checkIn}>Check-In</button>
{/if}
