import React from 'react'
import { Link } from 'react-router-dom'

export default function UsersPage() {
    return (
        <div className='md:ml-64 py-24 px-12'>
            <h1 className='text-4xl font-bold'>Users Page</h1>
            <ul>
                <li><Link className='text-2xl p-2' to='1'>User 1</Link></li>
                <li><Link className='text-2xl p-2' to='2'>User 2</Link></li>
                <li><Link className='text-2xl p-2' to='3'>User 3</Link></li>
            </ul>

        </div>
    )
}
