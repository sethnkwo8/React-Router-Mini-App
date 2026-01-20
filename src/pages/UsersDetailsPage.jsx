import { useLoaderData, Await } from "react-router-dom"
import { Suspense } from "react";

export default function UsersDetailsPage() {
    const user = useLoaderData();

    return (
        <div className="md:ml-64 py-24 px-12">
            <Suspense fallback={<p>Loading user details...</p>}>
                <Await resolve={user}>
                    {(u) => (
                        <>
                            <h1 className="text-3xl font-bold">{u.name}</h1>
                            <p className="text-xl">Role: {u.role}</p>
                        </>
                    )}
                </Await>
            </Suspense>
        </div>
    )
}
