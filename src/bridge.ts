import { Bridge } from "@hydrophobefireman/flask-jwt-jskit";
import { IUser } from "./interfaces";
import { userRoutes } from "./packages/halo-api/api-routes";

const client = new Bridge<IUser>(null);

client.setRoutes({
  loginRoute: userRoutes.login,
  refreshTokenRoute: userRoutes.refreshToken,
  initialAuthCheckRoute: userRoutes.userDetails("me"),
});
const { useAuthState, useIsLoggedIn } = client.getHooks();

const requests = client.getHttpClient();

export { useAuthState, useIsLoggedIn, requests, client };
