import { Object_entries } from "@hydrophobefireman/j-utils";
import { Router } from "@hydrophobefireman/ui-lib";
import { componentMap } from ".";
import { matches } from "./match";

export function importCurrentRoute() {
  const currentRoute = Router.path;
  Object_entries(componentMap).forEach(([path, preloader]) => {
    if (matches(path, currentRoute)) {
      console.log("Preloading route:", path);
      preloader();
    }
  });
}
