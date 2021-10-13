import "statedrive";

import { Bridge } from "@hydrophobefireman/flask-jwt-jskit";
import { redirect } from "@hydrophobefireman/ui-lib";

import { IUser } from "./interfaces";
import { userRoutes } from "./packages/halo-api/api-routes";
export { get, set, del, clear } from "@hydrophobefireman/flask-jwt-jskit";
const client = new Bridge<IUser>(null);

client.setRoutes({
  loginRoute: userRoutes.login,
  refreshTokenRoute: userRoutes.refreshToken,
  initialAuthCheckRoute: userRoutes.userDetails("me"),
});
client.onLogout(() => redirect("/login"));
const { useAuthState, useIsLoggedIn } = client.getHooks();

const requests = client.getHttpClient();

export { useAuthState, useIsLoggedIn, requests, client };
