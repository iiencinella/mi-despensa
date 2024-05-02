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
    resolve({success, username, role});
  });
}
