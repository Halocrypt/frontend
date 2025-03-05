import {client, requests} from "@/bridge";
import usersUnprocessed from "@/data/users.json";
import {IUser} from "@/interfaces";
import {userRoutes} from "@/packages/halo-api/api-routes";
type AbortableFetchResponse<T> = ReturnType<typeof requests.get<T>>;

import {RegisterUser} from "./interfaces";

export function register(user: RegisterUser) {
  return requests.postJSON<IUser>(userRoutes.register, user);
}

export const login = client.login.bind(client);
const users = usersUnprocessed.map((x) => ({user_data: x}));
const c = new AbortController();
const h = Promise.resolve(new Headers());
export function userDetails(user: string) {
  return {
    controller: c,
    headers: h,
    result: Promise.resolve({
      data: users.find((u) => u.user_data.user === user),
      error: null,
    }),
  } as AbortableFetchResponse<{user_data: IUser}>;
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
  return requests.postJSON(userRoutes.verificationEmail, {handler});
}

export function sendVerificationEmailToken(token: string) {
  return requests.patchJSON(userRoutes.verificationEmail, {token});
}

export function requestNewPassword(user: string, handler: string) {
  return requests.postJSON(userRoutes.passwordReset(user), {handler});
}

export function setNewPassword(
  user: string,
  body: {token: string; new_password: string},
) {
  return requests.patchJSON(userRoutes.passwordReset(user), body);
}
