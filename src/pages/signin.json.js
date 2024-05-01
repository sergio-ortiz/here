export const prerender = false;

export async function GET(context) {
	context.cookies.set('loggedIn', 'true', {httpOnly: true, sameSite: 'lax' });
	
	return new Response(
		JSON.stringify(context.cookies.get('loggedIn')),
	);
}
