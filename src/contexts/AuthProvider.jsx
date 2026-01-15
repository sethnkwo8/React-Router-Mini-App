import { initialValue, authReducer } from "../reducer/authReducer"
import { AuthContext } from "./AuthContext"
import { useReducer } from "react"

export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, initialValue);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
