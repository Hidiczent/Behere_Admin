import type { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Report from "../pages/report";
import Recomment from "../pages/recomment";

export const routes: RouteObject[] = [
    {
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/dashboard", element: <Dashboard /> },
            { path: "/report", element: <Report /> },
            { path: "/recomment", element: <Recomment /> },
        ],
    },
    { path: "*", element: <NotFound /> },
];
