import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  let user = { rol: "admin" };

  return <>{user.rol === "admin" ? <Outlet /> : <Navigate to="/" />}</>;
};

export default ProtectedRoutes;
