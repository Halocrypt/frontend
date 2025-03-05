import "statedrive";

import {AuthBridge} from "@hydrophobefireman/flask-jwt-jskit";
import {redirect} from "@hydrophobefireman/ui-lib";

import {IUser} from "./interfaces";
import {userRoutes} from "./packages/halo-api/api-routes";

export {get, set, del, clear} from "@hydrophobefireman/flask-jwt-jskit";
const client = new AuthBridge<IUser>();

client.routes = {
  loginRoute: userRoutes.login,
  refreshTokenRoute: userRoutes.refreshToken,
  initialAuthCheckRoute: userRoutes.userDetails("me"),
};
client.onLogout = () => redirect("/login");
const {useCurrentAuthState: __useAuthState, useIsLoggedIn} = client.getHooks();

const requests = client.getHttpClient();
export function useAuthState() {
  const [user, setAuthState] = __useAuthState();
  return [user?.auth, setAuthState] as const;
}
export {useIsLoggedIn, requests, client};
