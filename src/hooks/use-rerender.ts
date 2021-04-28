import { useState } from "@hydrophobefireman/ui-lib";

export function useRerender() {
  const [, setState] = useState(null);

  return () => setState({});
}
