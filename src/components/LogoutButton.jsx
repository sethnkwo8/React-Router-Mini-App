import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ACTIONS } from "../reducer/authReducer";

export default function LogoutButton() {

    const navigate = useNavigate();
    const { dispatch } = useAuth();

    function handleClick() {
        dispatch({ type: ACTIONS.LOGOUT })
        navigate('/login', { replace: true })
    }

    return (
        <button onClick={handleClick} className="hover:bg-gray-600 p-1 text-left">
            Logout
        </button>
    )
}
