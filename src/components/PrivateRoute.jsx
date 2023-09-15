import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ user }) {
  return user ? <Outlet /> : <Navigate to="login" />;
}
