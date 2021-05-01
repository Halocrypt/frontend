import { clean } from "./util";

export function nameValidator(n: string) {
  n = (n || "").trim();
  if (!n) return "Name cannot be blank";
  return null;
}

export function passwordValidator(p: string) {
  if (!p) return "Password cannot be blank";
  if (p.length < 4) return "Password cannot be shorter than 4 characters";
  return null;
}

export function usernameValidator(u: string) {
  if (!u || u.length < 3) return "Username cannot be shorter than 3 characters";
  if (u.length > 30) return "Username cannot be longer than 30 characters";
  if (clean(u) !== u.toLowerCase())
    return "Username cannot contain special characters";
  return null;
}

export function emailValidator(e: string) {
  if (!e || !e.includes("@") || e.includes(" ")) return "Invalid email";
}
