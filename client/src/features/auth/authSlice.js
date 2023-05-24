import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authStart: (state) => {
            state.isLoading = true
        },
        authSuccess: (state, action) => {
            const { user, token } = action.payload
            state.user = user
            state.token = token
            state.isAuthenticated = true
            state.isLoading = false
        },
        authFail: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        authLogout: (state) => {
            state.user = null
            state.token = null
            state.isAuthenticated = false
            state.isLoading = false
        },
    },
    extraReducers: {
                
    }

})


export const selectCurrentUser = state => state.auth.user
export const selectCurrentToken = state => state.auth.token

export const { authStart, authSuccess, authFail, authLogout } = authSlice.actions

export default authSlice.reducer