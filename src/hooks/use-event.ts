import { Events } from "@/interfaces";
import { eventAtom } from "@/state";
import { listEvents } from "@/packages/halo-api/play";
import { useEffect } from "@hydrophobefireman/ui-lib";
import { useResource } from "./use-resource";
import { useSetSharedState } from "statedrive";

export function useEvent(e: Events) {
  const setEventState = useSetSharedState(eventAtom);
  const [events, _, error] = useResource(listEvents, []);
  const event = events ? events.find((x) => x.name === e) : null;
  useEffect(() => {
    setEventState(event);
  }, [event]);
  return [event, error];
}
