import { users } from "../data/users";

export function usersDetailsLoader({ params }) {
    const user = users.find(u => u.id === params.id)

    if (!user) {
        throw new Error('User not found')
    }

    return user;
}