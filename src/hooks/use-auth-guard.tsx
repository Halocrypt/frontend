import { redirect, useEffect, useRoute } from "@hydrophobefireman/ui-lib";

import { useIsLoggedIn } from "@/bridge";

export function useAuthGuard() {
  const loggedIn = useIsLoggedIn();
  const { path } = useRoute();
  useEffect(() => {
    if (!loggedIn) return redirect(`/login?next=${path}`);
  }, [loggedIn, path]);
}
