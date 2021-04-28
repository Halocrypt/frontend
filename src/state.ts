import { IEvent } from "./interfaces";
import { createState } from "statedrive";

export const eventAtom = createState<IEvent>({ initialValue: null });
