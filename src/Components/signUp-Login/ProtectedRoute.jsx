import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("DLX Users");
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      toast.error("Please login to access this page!", { toastId: "login-error" });
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
