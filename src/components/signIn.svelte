<script>
	export let signIn;

	async function handleSubmit() {
		const response = await fetch('/signin.json');
		const data = await response.json();
		signIn(data);
	}
</script>

<div>
	<form on:submit|preventDefault={handleSubmit}>
		<div >
			<label for="name">
				<span>Name:</span>
			</label>
			<input name="name" required autocomplete="off" />
		</div>
		<div>
			<label for="password">
				<span>Password:</span>
			</label>
			<input
				type="password"
				name="password"
				required
				autocomplete="off"
			/>
		</div>
		<div>
			<button>Submit</button>
		</div>
	</form>
</div>
