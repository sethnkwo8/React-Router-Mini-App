import { Link, useLoaderData } from 'react-router-dom'

export default function UsersPage() {
    const users = useLoaderData();

    return (
        <div className='md:ml-64 py-24 px-12'>
            <h1 className='text-4xl font-bold'>Users Page</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/dashboard/users/${user.id}`} className='text-xl text-blue-600'>
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}
