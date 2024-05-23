export const prerender = false;

import { db, CheckIn } from "astro:db";

export async function POST({ request }) {
	const { location, timestamp } = await request.json();
	
	const time = new Date(timestamp);

	const query = await db.insert(CheckIn).values({ location, time }).returning();
	
	const message = query ? 'success' : 'try again';

	return new Response(
		JSON.stringify({ message }),
	);
}
