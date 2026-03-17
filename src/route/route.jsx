import { createBrowserRouter, Navigate } from "react-router";
import SignIn from "../features/auth/SignIn";
import ResetPassword from "../features/auth/ResetPassword";
import ForgotPassword from "../features/auth/ForgotPassword";
import VerifyCode from "../features/auth/VerifyCode";
import NotFoundPage from "../features/auth/NotFoundPage";
import MainLayout from "../Layout/MainLayout";
import Dashboard from "../features/dashboard/Dashboard";
import Notifications from "../features/notifications/Notifications";
import Buildings from "../features/buildings/Buildings";
import Profile_and_Setting from "../features/Profile_and_Setting/Profile_and_Setting";
import Team_messaging from "../features/Team_messaging/Team_messaging";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/dashboard" replace />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "dashboard/notifications",
                element: <Notifications />,
            },
            {
                path: "buildings",
                element: <Buildings />,
            },
            {
                path: "profile-settings",
                element: <Profile_and_Setting />,
            },
            {
                path: "/team-messaging",
                element: <Team_messaging />,
            }
        ]
    },




    // =========================== Auth Routes ============================ \\
    {
        path: "/login",
        element: <SignIn />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/verify-code",
        element: <VerifyCode />,
    },
    {
        path: "/reset-password",
        element: <ResetPassword />,
    },


    {
        path: "*",
        element: <NotFoundPage />,
    }


]);

export default router;