import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginForm() {

    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    function handleChange(e) {
        setUsername(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        navigate('/dashboard', { replace: true })
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <form className="border border-black rounded-lg p-6 flex flex-col items-center space-y-2 w-full md:w-1/2" onSubmit={handleSubmit}>
                <h1 className="font-bold text-3xl">Login</h1>
                <label className="font-bold" htmlFor="username">Username</label>
                <input className="outline-0 border border-black rounded-lg w-full p-2" id="username" onChange={handleChange} type="text" value={username} />
                <button disabled={!username.trim()} className='text-white bg-blue-400 py-4 px-8 rounded-lg hover:bg-blue-600 disabled:bg-gray-600'>Login</button>
            </form>
        </div>
    )
}
