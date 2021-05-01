import { _icon } from "../_icon";

let trophyFactory = (c: string) =>
  _icon(
    "0 0 27 24",
    <path
      fill={c}
      fill-rule="evenodd"
      d="M26.54 4.54v2.57c0 1.64-1.03 3.32-2.84 4.62-1.44 1.04-3.2 1.7-5.05 1.92-1.44 2.39-3.12 3.37-3.12 3.37v3.31h2.2c1.62 0 2.94.95 2.94 2.57v.55c0 .3-.25.55-.55.55H6.53c-.3 0-.55-.25-.55-.55v-.55c0-1.62 1.32-2.57 2.94-2.57h2.2v-3.31S9.44 16.04 8 13.65c-1.85-.22-3.61-.88-5.05-1.92C1.14 10.43.11 8.75.11 7.11V4.54c0-.61.49-1.1 1.1-1.1h4.77V1.6c0-.61.49-1.1 1.1-1.1h12.49c.61 0 1.1.49 1.1 1.1v1.84h4.77c.61 0 1.1.49 1.1 1.1zM6.58 10.33c-.32-1.15-.54-2.46-.59-3.96H3.04v.74c0 .53.51 1.43 1.62 2.24.58.41 1.23.74 1.92.98zm17.03-3.96h-2.95c-.05 1.5-.27 2.81-.59 3.96.69-.24 1.34-.57 1.92-.98.8-.58 1.62-1.5 1.62-2.24v-.74z"
    />,
    "var(--bg)"
  );

export const GoldTrophyIcon = trophyFactory("#f1c40f");
export const SilverTrophyIcon = trophyFactory("silver");
export const BronzeTrophyIcon = trophyFactory("#cd7f32");

trophyFactory = null;
