import { StatCard } from "../components/StatCard"

export default function DashboardPage() {
    return (
        <div className="md:ml-64 py-24 px-12">
            <StatCard stat={1240} title={'Total Users'} />
            <StatCard stat={600} title={'New Signups'} />
            <StatCard stat={'$10,000'} title={'Revenue'} />
        </div>
    )
}
