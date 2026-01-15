import { Link, useParams } from "react-router-dom"

export function UsersDetailsPage() {
    const searchParams = useParams()

    return (
        <div className="md:ml-64 py-24 px-12">
            <Link to='/dashboard/users'>Back</Link>
            <p className="mt-12 font-bold text-2xl">User ID : {searchParams.id}</p>
        </div>
    )
}
