export function getAuthUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

export function isAuthenticated() {
    return Boolean(getAuthUser())
}