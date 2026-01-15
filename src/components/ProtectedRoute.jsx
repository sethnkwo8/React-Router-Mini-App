import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export default function ProtectedRoute() {

  const { state } = useAuth();

  if (!state.isAuthenticated) {
    return <Navigate to='/login' replace />
  }

  return <Outlet />
}
