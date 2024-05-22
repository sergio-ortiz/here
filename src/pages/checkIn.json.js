export const prerender = false;

import { db, CheckIn } from "astro:db";

export async function POST({ request }) {
	const { location, time } = await request.json();

	const query = await db.insert(CheckIn).values({ location, time: new Date(time) }).returning();
	
	const message = query ? 'success' : 'try again';

	return new Response(
		JSON.stringify({ message }),
	);
}
