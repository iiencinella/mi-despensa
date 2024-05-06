import { column, defineDb, defineTable } from 'astro:db';

const Usuario = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    alias: column.text(),
    pass: column.text(),
    role: column.text(),
    nombre: column.text(),
    logueado:column.boolean({default: false}),
  }
})

const Product = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    nombre: column.text(),
    codigo: column.number(),
    precio: column.number(),
    cantidad: column.number(),
  }
})

const Proveedor = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    nombre: column.text({unique: true}),
    direccion: column.text(),
    telefono: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Usuario, Product, Proveedor },
});
