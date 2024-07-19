import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

interface PrivateRouteProps {
  component: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component }) => {
  const { state } = useContext(AuthContext)!;
  return state.isAuthenticated ? component : <Navigate to="/login" />;
};

export default PrivateRoute;
