const getDefault: <T>(mod: { default: T }) => T = (mod) => mod.default;

// lazy load routes here
export const componentMap = {
  "/": () => import("@/pages/Landing").then(getDefault),
  "/register": () => import("@/pages/Register").then(getDefault),
  "/login": () => import("@/pages/Login").then(getDefault),
  "/forgot-password": () => import("@/pages/ForgotPassword").then(getDefault),
  "/verify-email": () => import("@/pages/VerifyEmail").then(getDefault),
  "/play": () => import("@/pages/Play").then(getDefault),
  "/play/notifications": () => import("@/pages/Notifications").then(getDefault),
  "/leaderboard": () => import("@/pages/Leaderboard").then(getDefault),
  "/u/:user": () => import("@/pages/Profile").then(getDefault),
  "/-/confirm-email": () =>
    import("@/pages/Verification/ConfirmEmail").then(getDefault),
  "/-/reset-password": () =>
    import("@/pages/Verification/ResetPassword").then(getDefault),
  "/rules": () => import("@/pages/Rules").then(getDefault),
};
