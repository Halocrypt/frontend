import { useAuthState, useIsLoggedIn } from "@/bridge";

import { IUser } from "@/interfaces";
import { redirect } from "@hydrophobefireman/ui-lib";
import { useResource } from "@/hooks/use-resource";
import { userDetails } from "@/packages/halo-api/user";

export function useUserGuard(username: string, user: IUser) {
  if (username === "me") {
    if (!user || !user.user) {
      redirect("/login?next=/u/me");
      return false;
    }
    return redirect(`/u/${user.user}`);
  }
  return username;
}

export function useUserDetails(username: string) {
  const {
    resp: user,
    error,
    clearError,
    setResp: setUser,
  } = useResource(userDetails, [username]);
  return { user: user && user.user_data, error, clearError, setUser } as const;
}
