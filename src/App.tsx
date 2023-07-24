import { Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";

import useAuthStore from "./store/useAuthStore";
import useThemeStore from "./store/useThemeStore";
// components
import RequireAuth from "./components/auth/RequireAuth";
import GlobalLoader from "./components/GlobalLoader";
import NotFound from "./components/NotFound";

const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));

function App() {
  const { refreshTheToken, logOut } = useAuthStore((state) => state.actions);

  const theme = useThemeStore((state) => state.theme);
  if (
    theme === "dark" ||
    (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <Suspense fallback={<GlobalLoader />}>
      <Routes>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* private routes */}
        <Route element={<RequireAuth />}>
          <Route
            path="/"
            element={
              <>
                <button onClick={() => refreshTheToken()}>refresh</button>
                <button onClick={() => logOut()}>logOut</button>
                <Link to="/login">login</Link>
              </>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
