import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;

  // authenticated ma bhayeka child root haru sab outlet ma render hunxan  and authenticated xainan bhane home ma redirect hunxan
}
