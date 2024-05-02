import { User, Product, db, eq } from "astro:db";

export function dbLogin(email: string, password: string) {
  let username: string | null = null;
  let role: string = 'caja';
  let success: boolean = false;
  return new Promise(async (resolve, reject) => {
    const user = await db.select().from(User).where(eq(User.alias, email))

    if (user.length > 0) {
      if (user[0].pass === password) {
        success = true
        username = 'Usuario Registrado'
        role = user[0].role
      }
    }
    else {
      if (email === "admin@example.com" && password === "1234") {
        username = "Usuario Admin";
        role = 'admin';
      } else if (email === "proveedor@example.com" && password === "1234") {
        username = "Ususario Proveedor";
        role = 'proveedor';
      } else if (email === "producto@example.com" && password === "1234") {
        username = "Usuario Producto";
        role = 'producto';
      } else if (email === "cajas@example.com" && password === "1234") {
        username = "Usuario Cajas";
      } else {
        success = false;
      }
    }
    resolve({success, username, role});
  });
}
