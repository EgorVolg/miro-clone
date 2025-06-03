import { AppHeader } from "@/features/header";
import { ROUTES } from "@/shared/model/routes";
import { Outlet, useLocation } from "react-router-dom"; 

export function App() {
  const location = useLocation();

  const isAuthenticated =
    location.pathname === ROUTES.LOGIN || location.pathname === ROUTES.REGISTER;

  return (
    <div className="App">
      {!isAuthenticated && <AppHeader />}
      <Outlet />
    </div>
  );
}
