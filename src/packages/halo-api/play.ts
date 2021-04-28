import { IEvent } from "@/interfaces";
import { playRoutes } from "@/packages/halo-api/api-routes";
import { requests } from "@/bridge";

type Events = "main" | "intra";
export function getLeaderboard(event: Events) {
  return requests.get(playRoutes.leaderboard(event));
}

export function getQuestion(event: Events) {
  return requests.get(playRoutes.question(event));
}

export function answer(event: Events, body: { answer: string }) {
  return requests.postJSON(playRoutes.answer(event), body);
}

export function listEvents() {
  return requests.get<IEvent[]>(playRoutes.getEvents);
}
