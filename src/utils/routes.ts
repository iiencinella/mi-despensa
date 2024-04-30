export function dbLogin(email: string, password: string) {
  let username: string | null = null;
  let role: string = 'caja';
  let success: boolean = true;
  return new Promise((resolve, reject) => {
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
    resolve({success, username, role});
  });
}
