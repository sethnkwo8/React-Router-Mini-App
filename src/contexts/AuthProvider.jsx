import { authReducer } from "../reducer/authReducer"
import { AuthContext } from "./AuthContext"
import { useReducer } from "react"
import { getAuthUser } from "../auth/auth";

export function AuthProvider({ children }) {
    const storedUser = getAuthUser();

    const [state, dispatch] = useReducer(authReducer, {
        isAuthenticated: Boolean(storedUser),
        user: storedUser
    });

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
