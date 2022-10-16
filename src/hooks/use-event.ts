import {useSetSharedState} from "statedrive";

import {Events, IEvent} from "@/interfaces";
import {listEvents} from "@/packages/halo-api/play";
import {eventAtom} from "@/state";
import {useEffect} from "@hydrophobefireman/ui-lib";

const event: IEvent = (
  {
    data: [
      {
        name: "main",
        event_start_time: 1622226600,
        event_end_time: 1622572200,
        is_over: null,
      },
      {
        name: "intra",
        event_start_time: 1620109800,
        event_end_time: 1621103400,
        is_over: true,
      },
    ],
  } as const
).data[0];
export function useEvent(e: Events) {
  const setEventState = useSetSharedState(eventAtom);

  useEffect(() => {
    setEventState(event);
  }, [event]);
  return [event, ""];
}
