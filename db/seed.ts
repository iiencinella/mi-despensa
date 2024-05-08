import { db, Producto, Proveedor, Usuario, Negocio } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Negocio).values([
		{ id: 1, nombre: 'Piensa Sencillo' },
		{ id: 2, nombre: 'Mi Negocio' },
	])
	await db.insert(Usuario).values([
		{ id: 1, alias: 'admin@piensasencillo.com.ar', pass: 'admin1234', role: 'admin', nombre: 'Usuario Piensa Sencillo', negocio: 1 },
		{ id: 2, alias: 'admin@midespensa.com.ar', pass: 'admin1234', role: 'admin', nombre: 'Usuario Administrador', negocio: 2 },
		{ id: 3, alias: 'cajas@midespensa.com.ar', pass: 'cajas1234', role: 'caja', nombre: 'Usuario de Cajas', negocio: 2 },

	])
	await db.insert(Producto).values([
		{ id: 1, nombre: 'Producto 1', codigo: '1', precio: 12, cantidad: 12 }
	])
	await db.insert(Proveedor).values([
		{ id: 1, nombre: 'Proveedor 1', direccion: 'Francisco de Bueno 185 A', telefono: '3434708954' }
	])
}
