import { Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import useAuthStore from "./store/useAuthStore";
import RequireAuth from "@/components/auth/RequireAuth";

function App() {
  const { refreshTheToken, logOut } = useAuthStore((state) => state.actions);
  return (
    <Routes>
      {/* public routes */}
      <Route
        path="login"
        element={
          <>
            <Login />
            <Link to="/">home</Link>
          </>
        }
      />
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
    </Routes>
  );
}

export default App;
