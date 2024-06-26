import wbtl from "jsonwebtoken";
import {dbLogin} from "./routes";

export async function login(email: string, password: string, maxAge: number) {
  const getLoginData = (await dbLogin(email, password).then((data) => {
    return data;
  })) as any;
  if (getLoginData.success == false) {
    return {success: false, token: null, max: null};
  } else {
    const expire = Math.floor(Date.now() / 1000) + maxAge;
    const token = wbtl.sign(
      {
        exp: expire,
        email: email,
        username: getLoginData.username,
        role: getLoginData.role,
        negocio: getLoginData.negocio,
      },
      "secret",
    );
    return {success: true, token: `${token}`, max: maxAge, negocio: getLoginData.negocio};
  }
}
