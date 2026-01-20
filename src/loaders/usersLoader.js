import { fetchUsers } from "../utils/fakeAPI";

export function usersLoader() {
    return {
        users: fetchUsers()
    }
}