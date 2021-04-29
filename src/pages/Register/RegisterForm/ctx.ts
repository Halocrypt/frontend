import { createContext, useContext } from "@hydrophobefireman/ui-lib";

export const LoadingContext = createContext(false);

export function useIsLoading() {
  return useContext(LoadingContext);
}
