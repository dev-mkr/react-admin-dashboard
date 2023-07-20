import useAuthStore from "@/store/useAuthStore";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const auth = useAuthStore((state) => state.auth);
  const location = useLocation();

  if (auth?.user && auth?.access_token) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
