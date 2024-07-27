import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./src/pages/loginPage";
import SignupPage from "./src/pages/signupPage";
import HomePage from "./src/pages/homepage";
import OtpPage from "./src/pages/otpPage";
import LandingPage from "./src/pages/landingPage";
import ProfilePage from "./src/pages/profilePage";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const { isAuthorized, isEmailVerified } = useSelector((e) => e.auth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthorized ? (
        isEmailVerified ? (
          <HomePage />
        ) : (
          <Navigate to="/otp" />
        )
      ) : (
        <LandingPage />
      ),
    },
    {
      path: "/login",
      element: isAuthorized ? <Navigate to="/" /> : <LoginPage />,
    },
    {
      path: "/signup",
      element: isAuthorized ? <Navigate to="/" /> : <SignupPage />,
    },
    {
      path: "/otp",
      element:
        isAuthorized && !isEmailVerified ? <OtpPage /> : <Navigate to="/" />,
    },
    {
      path: "/landing",
      element: isAuthorized ? <Navigate to="/" /> : <LandingPage />,
    },
    {
      path: "/profile",
      element: isAuthorized ? <ProfilePage /> : <Navigate to="/landing" />,
    },
    {
      path: "*",
      element: <Navigate to={isAuthorized ? "/" : "/landing"} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
