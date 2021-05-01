import { Bridge } from "@hydrophobefireman/flask-jwt-jskit";
import { IUser } from "./interfaces";
import { redirect } from "@hydrophobefireman/ui-lib";
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
