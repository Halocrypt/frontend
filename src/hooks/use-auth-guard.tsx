import { redirect, useEffect, useRoute } from "@hydrophobefireman/ui-lib";
import { useAuthState, useIsLoggedIn } from "@/bridge";

export function useAuthGuard(path: string) {
  const [user] = useAuthState();
  const loggedIn = !!(user && user.user);
  useEffect(() => {
    if (!loggedIn) return redirect(`/login?next=${path}`);
  }, [loggedIn, path]);
  return user;
}
