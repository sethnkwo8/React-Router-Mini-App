import { Link } from "react-router-dom"
import LogoutButton from "./LogoutButton"

export function Sidebar() {

    return (
        <div className="hidden w-64 h-screen bg-gray-900 text-white top-16 left-0 fixed md:flex flex-col gap-6 pt-8 px-6">
            <div className="text-3xl">
                MyDashboard
            </div>
            <div className="py-6">
                <ul className="flex flex-col gap-3 text-xl">
                    <li><Link to='/dashboard' className="hover:bg-gray-600 p-1">Dashboard</Link></li>
                    <li><Link to='/dashboard/analytics' className="hover:bg-gray-600 p-1">Analytics</Link></li>
                    <li><Link to='/dashboard/users' className="hover:bg-gray-600 p-1">Users</Link></li>
                    <li><Link to='/dashboard/settings' className="hover:bg-gray-600 p-1">Settings</Link></li>
                    <li><LogoutButton /></li>
                </ul>
            </div>
        </div>
    )
}
