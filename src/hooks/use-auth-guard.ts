import { redirect, useEffect } from "@hydrophobefireman/ui-lib";

import { useAuthState } from "@/bridge";

export function useAuthGuard(path: string) {
  const [user] = useAuthState();
  const loggedIn = !!(user && user.user);
  useEffect(() => {
    if (!loggedIn) return redirect(`/login?next=${path}`);
  }, [loggedIn, path]);
  return user;
}
