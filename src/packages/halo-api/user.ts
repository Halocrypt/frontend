import { client, requests } from "@/bridge";

import { IUser } from "@/interfaces";
import { RegisterUser } from "./interfaces";
import { userRoutes } from "@/packages/halo-api/api-routes";

export function register(user: RegisterUser) {
  return requests.postJSON<IUser>(userRoutes.register, user);
}

export const login = client.login.bind(client);

export function userDetails(user: string) {
  return requests.get<{ user_data: IUser }>(userRoutes.userDetails(user));
}

export type EditUserProps = Partial<
  Omit<RegisterUser, "user" | "password"> & {
    level: number;
    points: number;
  }
>;

export function editUser(user: string, props: EditUserProps) {
  return requests.patchJSON<IUser>(userRoutes.userDetails(user), props);
}

export function sendVerificationEmail(handler: string) {
  return requests.postJSON(userRoutes.verificationEmail, { handler });
}

export function sendVerificationEmailToken(token: string) {
  return requests.patchJSON(userRoutes.verificationEmail, { token });
}

export function requestNewPassword(user: string, handler: string) {
  return requests.postJSON(userRoutes.passwordReset(user), { handler });
}

export function setNewPassword(
  user: string,
  body: { token: string; new_password: string }
) {
  return requests.patchJSON(userRoutes.passwordReset(user), body);
}
