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
		<div>
			<label for="name">
				<span>Name:</span>
			</label>
			<input name="name" required />
		</div>
		<div>
			<label for="password">
				<span>Password:</span>
			</label>
			<input
				type="password"
				name="password"
				required
			/>
		</div>
		<div>
			<button>Submit</button>
		</div>
	</form>
</div>
