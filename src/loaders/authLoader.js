import { redirect } from "react-router-dom";
import { isAuthenticated } from "../auth/auth";

export function authLoader() {
    if (!isAuthenticated) {
        throw redirect('/login')
    }
    return null;
}