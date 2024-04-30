export const prerender = false;

export async function GET(context) {
	return new Response(
		JSON.stringify(context.cookies.get('loggedIn')),
	);
}
