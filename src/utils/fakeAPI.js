// Simulate delay
import { users } from "../data/users"

export function fetchUsers() {
    return new Promise(resolve => setTimeout(() => {
        resolve(users)
    }, 2000))
}