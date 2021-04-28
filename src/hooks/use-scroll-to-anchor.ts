import { useMount } from "./use-mount";

export function useScrolltoAnchor() {
  useMount(() => {
    const hash = location.hash.substr(1);
    const el = document.getElementById(hash);
    el && el.scrollIntoView();
  });
}
