import { Route, Routes } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register"
import { Authorized } from "./components/Authorized";
import { ApplicationViews } from "./components/ApplicationViews";

export const App = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES - anyone can access */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* PROTECTED ROUTES - must be logged in */}
      {/* The * catches ALL other routes */}
      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
};
