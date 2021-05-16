import { useMount } from "./use-mount";
import { useState } from "@hydrophobefireman/ui-lib";

export function useMouseMove() {
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);

  useMount(() => {
    function cb(e: MouseEvent) {
      const { clientX, clientY } = e;
      setX(clientX);
      setY(clientY);
    }
    addEventListener("mousemove", cb);
    return () => removeEventListener("mousemove", cb);
  });

  return [x, y];
}
