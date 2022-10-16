import {requests} from "@/bridge";
import lb from "@/data/leaderboard.json";
import {IEvent, INotification, IQuestion, IUser} from "@/interfaces";
import {playRoutes} from "@/packages/halo-api/api-routes";
import {AbortableFetchResponse} from "@hydrophobefireman/flask-jwt-jskit";

type Events = "main" | "intra";
const c = new AbortController();
const h = new Headers();
export const lb_data = {error: null, data: lb.data};
const res = {
  controller: c,
  headers: Promise.resolve(h),
  result: Promise.resolve(lb_data),
};
export function getLeaderboard(event: Events) {
  return res as AbortableFetchResponse<IUser[]>;
}

export function getQuestion(event: Events) {
  return requests.get<
    | IQuestion
    | {disqualified: boolean; disqualification_reason: string}
    | {game_over: boolean}
  >(playRoutes.question(event));
}

export function answer(event: Events, body: {answer: string}) {
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
