<script>
	export let isAuthorized;

	async function handleSubmit(event) {
		const formData = new FormData(event.target);

		const response = await fetch('/signin.json', {
			method: "POST",
			body: formData
		});

		const data = await response.json();
		isAuthorized(data);
	}
</script>

<div>
	<form on:submit|preventDefault={handleSubmit}>
		<label for="name">
			<span>Name:</span>
		</label>
		<input name="name" required />
		<button>Submit</button>
	</form>
</div>
