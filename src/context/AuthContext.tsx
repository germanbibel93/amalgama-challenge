import React, { createContext, useReducer, ReactNode } from "react";
import axios from "axios";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  error: string | null;
}

interface AuthContextProps {
  state: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  error: null,
};

type Action =
  | { type: "LOGIN_SUCCESS"; payload: string }
  | { type: "LOGIN_FAILURE"; payload: string }
  | { type: "LOGOUT" };

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const authReducer = (state: AuthState, action: Action): AuthState => {
  console.log(state, action);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        error: null,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        "https://2v234d7xc7.execute-api.us-east-1.amazonaws.com/default/login",
        new URLSearchParams({
          email: email,
          password: password,
        }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data.token });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: "Invalid email or password" });
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
