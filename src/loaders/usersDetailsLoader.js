import { fetchUsers } from "../utils/fakeAPI";

export function usersDetailsLoader({ params }) {
    return {
        user: fetchUsers().then(users => {
            const found = users.find(u => u.id === params.id)

            if (!found) {
                throw new Error('User not found')
            }

            return found;
        }
        )
    };
}