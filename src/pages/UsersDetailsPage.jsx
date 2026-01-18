import { useLoaderData } from "react-router-dom"

export default function UsersDetailsPage() {
    const user = useLoaderData();

    return (
        <div className="md:ml-64 py-24 px-12">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-xl">Role: {user.role}</p>
        </div>
    )
}
