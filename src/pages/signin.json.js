export const prerender = false;
import { db, User, eq } from 'astro:db';

export async function POST({ cookies, request }) {
	const user = await request.formData().then(async (data) => await db.select().from(User).where(eq(User.name, data.get('name'))));
	
	if (user.length) {
		cookies.set('loggedIn', 'true', { httpOnly: true, sameSite: 'lax' });
	}

	return new Response(
		JSON.stringify(cookies.get('loggedIn')),
	);
}
