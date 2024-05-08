import wblt from "jsonwebtoken";
import type {profileType} from "./types";

export default function hasProfile(myToken: string) {
  let email: string | null = null;
  let username: string | null = null;
  let success: boolean = true;
  let role: string = 'caja';
  let negocio: string = 'Mi Negocio';
  switch (myToken) {
    case "undefined":
    case undefined:
    case "null":
    case null:
      success = false;
      return { success: success, email: email, username: username, role: role, negocio: negocio };
    default:
      const data = wblt.verify(myToken, "secret") as profileType;
      if (data.email && data.username) {
        email = data.email;
        username = data.username;
        role = data.role;
        negocio = data.negocio;
      } else {
        success = false;
      }
      return { success: success, email: email, username: username, role: role, negocio: negocio };
  }
}
