<h1>Your location</h1>
<span aria-busy="{!location}">{ location ? location : 'Reverse geocoding...' }</span>

<script>
	export let location;
</script>
