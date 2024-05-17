export const prerender = false;

import { db, CheckIn } from "astro:db";

export async function POST({ request }) {
	const { location } = await request.json();

	const query = await db.insert(CheckIn).values({ location }).returning();
	
	const message = query ? 'success' : 'try again';

	return new Response(
		JSON.stringify({ message }),
	);
}
