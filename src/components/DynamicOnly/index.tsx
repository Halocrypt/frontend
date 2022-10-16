import {HALO_CONFIG} from "@/data/config";

const render = HALO_CONFIG.DYNAMIC_DATA_AVAILABLE;
export function DynamicOnly({children}: {children?: any}) {
  if (render) return children;
  return null;
}
