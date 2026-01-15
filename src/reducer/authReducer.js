export const initialValue = {
    isAuthenticated: false,
    user: null
}

export const ACTIONS = {
    LOGIN: 'login',
    LOGOUT: 'logout'
}

export function authReducer(state, action) {
    switch (action.type) {
        case ACTIONS.LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case ACTIONS.LOGOUT:
            return initialValue
        default:
            return state
    }
}