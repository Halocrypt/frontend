import {StaticOnly} from "@/components/StaticBanner";
import {glassLink} from "@/style";
import {A, h} from "@hydrophobefireman/ui-lib";

const getDefault: <T>(mod: {default: T}) => T = (mod) => mod.default;

const $StaticOnly = async () => StaticOnly;
// lazy load routes here
export const componentMap = {
  "/": () => import("@/pages/Landing").then(getDefault),
  "/register": $StaticOnly,
  "/login": $StaticOnly,
  "/forgot-password": $StaticOnly,
  "/verify-email": $StaticOnly,
  "/play": $StaticOnly,
  "/play/notifications": $StaticOnly,
  "/leaderboard": () => import("@/pages/Leaderboard").then(getDefault),
  "/u/:user": () => import("@/pages/Profile").then(getDefault),
  "/-/confirm-email": $StaticOnly,
  "/-/reset-password": $StaticOnly,
  "/rules": () => import("@/pages/Rules").then(getDefault),
  "/about": () => import("@/pages/About").then(getDefault),
  "/certificate": () => import("@/pages/Certificate").then(getDefault),
  "/question-archive": () => import("@/pages/QuestionArchive").then(getDefault),
};
