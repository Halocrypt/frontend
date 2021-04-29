import { redirect, useRef, useRoute } from "@hydrophobefireman/ui-lib";

import { useIsLoggedIn } from "@/bridge";

export function useLoggedinCheck() {
  const loggedIn = useIsLoggedIn();
  const { search } = useRoute();
  const redirectRef = useRef(false);
  if (loggedIn && !redirectRef.current) {
    redirectRef.current = true;
    return redirect(search.get("next") || "/u/me");
  }
}
