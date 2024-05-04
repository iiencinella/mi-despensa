// This file is generated by Astro DB
declare module 'astro:db' {
	export const User: import("@astrojs/db/runtime").Table<
		"User",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"User","primaryKey":true}},"alias":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"alias","collection":"User","primaryKey":false,"optional":false}},"pass":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"pass","collection":"User","primaryKey":false,"optional":false}},"role":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"role","collection":"User","primaryKey":false,"optional":false}}}
	>;
	export const Product: import("@astrojs/db/runtime").Table<
		"Product",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Product","primaryKey":true}},"nombre":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"nombre","collection":"Product","primaryKey":false,"optional":false}},"codigo":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"codigo","collection":"Product","primaryKey":false,"optional":false}},"precio":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"precio","collection":"Product","primaryKey":false,"optional":false}},"cantidad":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"cantidad","collection":"Product","primaryKey":false,"optional":false}}}
	>;
	export const Proveedor: import("@astrojs/db/runtime").Table<
		"Proveedor",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Proveedor","primaryKey":true}},"nombre":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"nombre","collection":"Proveedor","primaryKey":false,"optional":false}},"direccion":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"direccion","collection":"Proveedor","primaryKey":false,"optional":false}},"telefono_celular":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"telefono_celular","collection":"Proveedor","primaryKey":false,"optional":false}}}
	>;
}
