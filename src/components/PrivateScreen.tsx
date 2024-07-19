import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateScreen: React.FC = () => {
  const { logout } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h2>Private Screen</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default PrivateScreen;
