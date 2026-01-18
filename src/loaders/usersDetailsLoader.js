import { users } from "../data/users";

export function usersDetailsLoader({ params }) {
    const user = users.filter(u => u.id === params.id)

    if (!user) {
        throw new Error('User not found')
    }

    return user;
}