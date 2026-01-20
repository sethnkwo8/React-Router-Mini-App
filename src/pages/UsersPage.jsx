import { Link, useLoaderData, Await } from 'react-router-dom'
import { Suspense } from 'react';

export default function UsersPage() {
    const { users } = useLoaderData();

    return (
        <div className='md:ml-64 py-24 px-12'>
            <h1 className='text-4xl font-bold'>Users Page</h1>
            <Suspense fallback={<p>Loading users...</p>}>
                <Await resolve={users}>
                    {
                        (users) => (
                            <ul>
                                {users.map(user => (
                                    <li key={user.id}>
                                        <Link to={`/dashboard/users/${user.id}`} className='text-xl text-blue-600'>
                                            {user.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                </Await>
            </Suspense>

        </div>
    )
}
