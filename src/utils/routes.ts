import { Negocio, Usuario, db, eq } from "astro:db";

export function dbLogin(email: string, password: string) {
  let username: string | null = null;
  let role: string = 'caja';
  let success: boolean = false;
  let negocio: string = 'Mi Negocio';
  return new Promise(async (resolve, reject) => {
    const user = await db.select().from(Usuario).where(eq(Usuario.alias, email))

    if (user.length > 0) {
      if (user[0].pass === password && !user[0].logueado && user[0].habilitado) {
        success = true
        username = user[0].nombre
        role = user[0].role

        const usuarioNegocio = await db.select().from(Negocio).where(eq(Negocio.id, user[0].negocio))
        console.log(usuarioNegocio)
        
        if (usuarioNegocio.length > 0) {
          negocio = usuarioNegocio[0].nombre

          await db.update(Usuario)
            .set({ logueado: true })
            .where(eq(Usuario.alias, email))
        }
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
        username = "Usuario Productoo";
        role = 'producto';
      } else if (email === "cajas@example.com" && password === "1234") {
        username = "Usuario Cajas";
      } else {
        success = false;
      }
    }
    resolve({ success, username, role, negocio });
  });
}

export async function dbUnlogin(email: any) {
  await db
    .update(Usuario)
    .set({ logueado: false })
    .where(eq(Usuario.alias, email));
}