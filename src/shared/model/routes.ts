import "react-router-dom";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  DASHBOARD: "/dashboard",
  SETTINGS: "/settings",
  PROFILE: "/profile",
  NOT_FOUND: "*",
};

export type PathParams = {
  [ROUTES.BOARD]: { boardId: string };
};

declare module "react-router-dom" {
  interface RouteProps {
    params: PathParams;
  }
}
