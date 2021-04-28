import { client } from "@/bridge";
import { useMount } from "./use-mount";
import { useState } from "@hydrophobefireman/ui-lib";

export function useCredsCheck() {
  const [ready, setReady] = useState(false);
  useMount(() => {
    client.syncWithServer().then(() => setReady(true));
  });
  return ready;
}
