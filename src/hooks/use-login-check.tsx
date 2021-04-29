import { redirect, useRoute } from "@hydrophobefireman/ui-lib";

import { useIsLoggedIn } from "@/bridge";

export function useLoggedinCheck() {
  const loggedIn = useIsLoggedIn();
  const { search } = useRoute();
  if (loggedIn) {
    return redirect(search.get("next") || "/u/me");
  }
}
