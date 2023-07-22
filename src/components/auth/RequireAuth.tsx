import { useState, useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";
import GlobalLoader from "@/components/GlobalLoader";

const rememberMe = Boolean(localStorage.getItem("rememberMe"));

const ProtectedRoute = () => {
  const auth = useAuthStore((state) => state.auth);
  const { refreshTheToken } = useAuthStore((state) => state.actions);
  const [isLoading, setIsLoading] = useState(!auth?.access_token);
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refreshTheToken();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    if (!auth?.access_token && rememberMe) {
      verifyRefreshToken();
    } else {
      setIsLoading(false);
    }

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <GlobalLoader />;
  }

  if (auth?.access_token) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default ProtectedRoute;
