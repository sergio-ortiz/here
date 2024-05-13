export const prerender = false;

export async function POST({ cookies, request }) {
	request.formData()
		.then((data) => console.log(`Name: ${data.get('name')}, Password: ${data.get('password')}`));
	
	cookies.set('loggedIn', 'true', { httpOnly: true, sameSite: 'lax' });

	return new Response(
		JSON.stringify(cookies.get('loggedIn')),
	);
}
