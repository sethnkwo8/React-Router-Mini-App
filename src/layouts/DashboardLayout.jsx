import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { Navbar } from '../components/Navbar'

export function DashboardLayout() {
    return (
        <div>
            <header>
                <Sidebar />
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>

        </div>
    )
}
