import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AddService from "../pages/AddService";
import Users from "../pages/Users";
import Dashboard from "../pages/Dashboard";
import Notification from "../pages/Notification";
import Help from "../pages/Help";
import Settings from "../pages/Settings";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/add-services",
                element: <AddService />
            },
            {
                path: "/users",
                element: <Users />
            },
            {
                path: "/notifications",
                element: <Notification />
            },
            {
                path: "/help",
                element: <Help />
            },
            {
                path: "/settings",
                element: <Settings />
            }

        ]

    }
])