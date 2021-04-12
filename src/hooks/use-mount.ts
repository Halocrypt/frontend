import { useEffect, useRoute } from "@hydrophobefireman/ui-lib";

export function useMount(fn: () => unknown | (() => void)) {
  return useEffect(fn, []);
}
