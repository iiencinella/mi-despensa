import { db, User } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([
		{ id: 1, alias: 'admin@midespensa.com.ar', pass: 'admin1234', role: 'admin' }
	])
}
