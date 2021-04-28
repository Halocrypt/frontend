import { Events } from "@/interfaces";

const host = location.host.includes("localhost")
  ? "http://localhost:5000/"
  : "https://api.halocrypt.com/";

function absoluteURL(relative: string) {
  const u = new URL(relative, host);
  return u.href;
}

export const userRoutes = {
  register: absoluteURL("/accounts/register/"),
  login: absoluteURL("/accounts/login/"),
  refreshToken: absoluteURL("/accounts/token/refresh/"),
  userDetails: (user: string) => absoluteURL(`/accounts/${user}/`),
  verificationEmail: absoluteURL("/accounts/email-verification/"),
  passwordReset: (user: string) =>
    absoluteURL(`/accounts/${user}/password/new/`),
};

export const adminRoutes = {
  disqualifyUser: (user: string) =>
    absoluteURL(`/admin/accounts/${user}/disqualify/`),
  reQualifyUser: (user: string) =>
    absoluteURL(`/admin/accounts/${user}/requalify/`),
  deleteUser: (user: string) => absoluteURL(`/admin/accounts/${user}/delete/`),
  addQuestion: (event: Events) => absoluteURL(`/admin/${event}/questions/add/`),
  editQuestion: (event: Events, num: number) =>
    absoluteURL(`/admin/${event}/questions/${num}/`),
  listQuestions: (event: Events) =>
    absoluteURL(`/admin/events/${event}/questions/`),
  editEvent: (event: Events) => absoluteURL(`/admin/events/${event}/`),
  notificationKey: absoluteURL("/admin/notificaton-key/"),
  logserverKey: absoluteURL("/admin/yek-revresgol/"),
  listUsers: (event: Events) => absoluteURL(`/admin/${event}/users/`),
  getLogs: "https://logs.halocrypt.com/",
  getNotifications: (event: Events) =>
    `https://notifications.halocrypt.com?channel=${event}`,
  addNotification: (event: Events) =>
    `https://notifications.halocrypt.com/add?channel=${event}`,
  deleteNotification: (event: Events) =>
    `https://notifications.halocrypt.com/delete?channel=${event}`,
};

export const playRoutes = {
  leaderboard: (event: Events) => absoluteURL(`/play/${event}/leaderboard/`),
  question: (event: Events) => absoluteURL(`/play/${event}/question/`),
  answer: (event: Events) => absoluteURL(`/play/${event}/answer/`),
  userCount: (event: Events) => absoluteURL(`/play/${event}/user-count/`),
  getEvents: absoluteURL("/play/events/"),
};
