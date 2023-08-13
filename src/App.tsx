import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import useThemeStore from "./store/useThemeStore";
// components
import RequireAuth from "./components/auth/RequireAuth";
import GlobalLoader from "./components/GlobalLoader";
import NotFound from "./components/NotFound";
import DashboardLayout from "./components/layout/DashboardLayout";

const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Overview = lazy(() => import("./pages/Overview/Overview"));

function App() {
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
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Overview />} />
            <Route path="calender" element={<h1>calender</h1>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
