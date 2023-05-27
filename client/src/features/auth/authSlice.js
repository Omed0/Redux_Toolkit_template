import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    user: [],
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: {
            reducer: (state, action) => {
                state.user = action.payload
                localStorage.setItem('userInfo', JSON.stringify({ id: state.user.id, role: state.user.role }))
            },
            prepare: (name, email, password, role) => {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        email,
                        password,
                        role,
                    },
                }
            }
        },
        login: {
            reducer: (state, action) => {
                for (const key in state.user) {
                    if (state.user[key].email === action.payload.email && state.user[key].password === action.payload.password) {
                        localStorage.setItem('userInfo', JSON.stringify({ id: state.user[key].id, role: state.user[key].role }));
                    }
                }
                // Add the return statement here
                return state;
            },
            prepare: (email, password) => {
                return {
                    payload: {
                        email,
                        password,
                    },
                }
            }
        },

        logout: (state, action) => {
            state.userInfo = null
            localStorage.removeItem('userInfo')
        },
        extraReducers: {}
    }
})

export const selectUser = (state) => state.auth.user;

export const { register, login, logout } = authSlice.actions;

export default authSlice.reducer