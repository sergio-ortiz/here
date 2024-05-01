export const prerender = false;

export async function GET(context) {
	const cookie = context.cookies.get('loggedIn');

	if(!cookie) {
		context.cookies.set('loggedIn', 'false', { httpOnly: true, sameSite: 'lax' });
	}

	return new Response(
		JSON.stringify(context.cookies.get('loggedIn')),
	);
}
