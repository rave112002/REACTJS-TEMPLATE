import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LandingLayout from "@pages/layouts/LandingLayout";
import Login from "@pages/Login";
import Home from "@pages/Home";
import SecondPage from "@pages/SecondPage";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-dvh bg-header flex flex-col items-center justify-center">
      <span className="text-5xl font-bold text-white text-shadow-lg/30">
        404 - Page Not Found
      </span>
      <p className="text-white mt-2">Redirecting to home in 10 seconds...</p>
    </div>
  );
};

const Routers = () => {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<Login />} />

      {/* Admin route inside layout */}
      <Route element={<LandingLayout />}>
        <Route path="/admin" element={<Home />} />
        <Route path="/map" element={<SecondPage />} />
      </Route>

      {/* Catch-all 404 with redirect */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
