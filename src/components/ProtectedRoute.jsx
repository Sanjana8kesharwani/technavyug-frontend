import { Navigate } from "react-router-dom";

const LOGIN_URL = import.meta.env.VITE_LOGIN_URL;

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={LOGIN_URL} />;
  }

  return children;
}
