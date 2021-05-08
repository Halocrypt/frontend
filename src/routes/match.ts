import { createRoutePath } from "@hydrophobefireman/ui-lib";

// ui ilb doesn't expose the match function but it's
// fairly easy to recreate it
export function matches(path: string, to: string) {
  const routePath = createRoutePath(path).regex;
  return !!routePath.exec(to);
}
