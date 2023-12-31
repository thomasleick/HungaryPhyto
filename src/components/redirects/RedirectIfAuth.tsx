import useAuth from "../../hooks/useAuth.js";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RedirectIfAuth = () => {
  const navigate = useNavigate();
  const { auth }: { auth?: any } = useAuth(); // Make auth property optional

  useEffect(() => {
    if (auth?.accessToken && localStorage.getItem("refreshToken") !== null) {
      navigate("/timeline");
    }
  }, [navigate, auth?.accessToken]);

  return <Outlet />;
};

export default RedirectIfAuth;
