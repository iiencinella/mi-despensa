// This file is generated by Astro DB
declare module 'astro:db' {
	export const Usuario: import("@astrojs/db/runtime").Table<
		"Usuario",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Usuario","primaryKey":true}},"alias":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"alias","collection":"Usuario","primaryKey":false,"optional":false}},"pass":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"pass","collection":"Usuario","primaryKey":false,"optional":false}},"role":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"role","collection":"Usuario","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Rol","primaryKey":true}}}},"nombre":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"nombre","collection":"Usuario","primaryKey":false,"optional":false}},"negocio":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"negocio","collection":"Usuario","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Negocio","primaryKey":true}}}},"logueado":{"type":"boolean","schema":{"optional":false,"unique":false,"deprecated":false,"name":"logueado","collection":"Usuario","default":false}},"habilitado":{"type":"boolean","schema":{"optional":false,"unique":false,"deprecated":false,"name":"habilitado","collection":"Usuario","default":true}}}
	>;
	export const Producto: import("@astrojs/db/runtime").Table<
		"Producto",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Producto","primaryKey":true}},"nombre":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"nombre","collection":"Producto","primaryKey":false,"optional":false}},"codigo":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"codigo","collection":"Producto","primaryKey":false,"optional":false}},"precio":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"precio","collection":"Producto","primaryKey":false,"optional":false}},"cantidad":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"cantidad","collection":"Producto","primaryKey":false,"optional":false}}}
	>;
	export const Proveedor: import("@astrojs/db/runtime").Table<
		"Proveedor",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Proveedor","primaryKey":true}},"nombre":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"nombre","collection":"Proveedor","primaryKey":false,"optional":false}},"direccion":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"direccion","collection":"Proveedor","primaryKey":false,"optional":false}},"telefono":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"telefono","collection":"Proveedor","primaryKey":false,"optional":false}}}
	>;
	export const Negocio: import("@astrojs/db/runtime").Table<
		"Negocio",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Negocio","primaryKey":true}},"nombre":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"nombre","collection":"Negocio","primaryKey":false,"optional":false}}}
	>;
	export const Rol: import("@astrojs/db/runtime").Table<
		"Rol",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Rol","primaryKey":true}},"descripcion":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"descripcion","collection":"Rol","primaryKey":false,"optional":false}},"dependencia":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"dependencia","collection":"Rol","primaryKey":false,"optional":false}}}
	>;
}
