import { INotification, IQuestion, IUser, Log } from "@/interfaces";
import {
  adminRoutes,
  playRoutes,
  userRoutes,
} from "@/packages/halo-api/api-routes";

import { requests } from "@/bridge";

type Events = "main" | "intra";
export type QuestionMutation = Pick<
  IQuestion,
  "question_points" | "question_content" | "question_hints"
> & { answer: string };
export function listUsers(event: Events) {
  return requests.get<IUser[]>(playRoutes.leaderboard(event));
}

export function disqualifyUser(
  user: string,
  body: { reason: string; points: number }
) {
  return requests.patchJSON<IUser>(adminRoutes.disqualifyUser(user), body);
}

export function requalifyUser(user: string) {
  return requests.patchJSON<IUser>(adminRoutes.reQualifyUser(user), {});
}
export function deleteUser(user: string) {
  return requests.del(userRoutes.userDetails(user));
}

export function addQuestion(event: Events, body: QuestionMutation) {
  return requests.postJSON<IQuestion>(adminRoutes.addQuestion(event), body);
}

export function editQuestion(
  event: Events,
  number: number,
  body: QuestionMutation
) {
  return requests.patchJSON<IQuestion>(
    adminRoutes.editQuestion(event, number),
    body
  );
}

export function listQuestions(event: Events) {
  return requests.get<IQuestion[]>(adminRoutes.listQuestions(event));
}

export function editEvent(
  event: Events,
  body: { event_start_time: number; event_end_time: number; is_over: boolean }
) {
  return requests.patchJSON(adminRoutes.editEvent(event), body);
}

export function getLogKey() {
  return requests.get<string>(adminRoutes.logserverKey);
}

export function getLogs(accessKey: string) {
  return requests.get<Log[]>(adminRoutes.getLogs, {
    "x-access-key": accessKey,
  });
}

interface DeleteNotifProps {
  event: Events;
  ts: number;
}
export function deleteNotification({ event, ts }: DeleteNotifProps) {
  return requests.del(adminRoutes.deleteNotification(event, ts));
}
interface AddNotifProps {
  event: Events;
  body: any;
}
export function addNotification({ event, body }: AddNotifProps) {
  return requests.patchJSON(adminRoutes.addNotification(event), body);
}

// export function getUserCount() {}
