import {
  Router,
  RouterSubscription,
  useState,
} from "@hydrophobefireman/ui-lib";

import { useMount } from "./use-mount";

// useLocation vs useRoute
// useLocation works even if you're not inside a router (router's context) useRoute doesn't
// useRoute gets stateful data (params), useLocation doesn't
const getPath = () => ({ path: Router.path, qs: Router.qs });
export const useLocation = (): { path: string; qs: string } => {
  const [loc, setLoc] = useState(getPath);
  useMount(() => {
    const current = () => setLoc(getPath);
    RouterSubscription.subscribe(current);
    return () => RouterSubscription.unsubscribe(current);
  });
  return loc;
};
