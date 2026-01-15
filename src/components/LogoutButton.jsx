import { useNavigate } from "react-router-dom";

export default function LogoutButton() {

    const navigate = useNavigate();

    function handleClick() {
        navigate('/login', { replace: true })
    }

    return (
        <button onClick={handleClick} className="hover:bg-gray-600 p-1 text-left">
            Logout
        </button>
    )
}
