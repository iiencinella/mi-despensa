import { column, defineDb, defineTable } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    alias: column.text(),
    pass: column.text(),
    role: column.text(),
  }
})

const Product = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    nombre: column.text(),
    codigo: column.number(),
    precio: column.number(),
    cantidad: column.number()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { User, Product },
});
