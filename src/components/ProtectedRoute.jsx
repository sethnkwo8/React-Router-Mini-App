import { useState } from "react"
import { Outlet, Navigate } from "react-router-dom"

export default function ProtectedRoute() {

  const [state, setState] = useState(false);

  if (!state) {
    <Navigate to='/login' replace />
  }

  return <Outlet />
}
