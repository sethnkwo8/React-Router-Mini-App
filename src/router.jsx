import { createBrowserRouter } from "react-router-dom";
import AnalyticsPage from "./pages/AnalyticsPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import UsersPage from "./pages/UsersPage";
import UsersDetailsPage from "./pages/UsersDetailsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { authLoader } from "./loaders/authLoader";

import { usersDetailsLoader } from "./loaders/usersDetailsLoader";
import { usersLoader } from "./loaders/usersLoader";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardLayout />,
                loader: authLoader,
                children: [
                    { index: true, element: <DashboardPage /> },
                    { path: 'analytics', element: <AnalyticsPage /> },
                    { path: 'users', element: <UsersPage />, loader: usersLoader },
                    { path: 'users/:id', element: <UsersDetailsPage />, loader: usersDetailsLoader, errorElement: <ErrorPage /> }
                ]
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])

