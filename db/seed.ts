import { db, Product, Proveedor, User } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([
		{ id: 1, alias: 'admin@midespensa.com.ar', pass: 'admin1234', role: 'admin' }
	])
	await db.insert(Product).values([
		{ id: 1, nombre: 'Producto 1', codigo: '1', precio: 12, cantidad: 12 }
	])
	await db.insert(Proveedor).values([
		{ id: 1, nombre: 'Proveedor 1', direccion: 'Francisco de Bueno 185 A', telefono: '3434708954' }
	])
}
