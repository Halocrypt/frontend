import { useEffect, useRef } from "@hydrophobefireman/ui-lib";

export function useFocus<T extends HTMLElement>() {
  const ref = useRef<T>();
  useEffect(() => ref.current && ref.current.focus(), [ref.current]);
  return ref;
}
