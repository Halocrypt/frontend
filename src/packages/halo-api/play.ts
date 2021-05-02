import { IEvent, INotification, IQuestion, IUser } from "@/interfaces";

import { playRoutes } from "@/packages/halo-api/api-routes";
import { requests } from "@/bridge";

type Events = "main" | "intra";
export function getLeaderboard(event: Events) {
  return requests.get<IUser[]>(playRoutes.leaderboard(event));
}

export function getQuestion(event: Events) {
  return requests.get<
    | IQuestion
    | { disqualified: boolean; disqualification_reason: string }
    | { game_over: boolean }
  >(playRoutes.question(event));
}

export function answer(event: Events, body: { answer: string }) {
  return requests.postJSON<{
    is_correct: boolean;
    game_over?: boolean;
    disqualified?: boolean;
    reason?: string;
  }>(playRoutes.answer(event), body);
}
export function getNotifications(event: Events) {
  return requests.get<INotification[]>(playRoutes.getNotifications(event));
}
export function listEvents() {
  return requests.get<IEvent[]>(playRoutes.getEvents);
}
