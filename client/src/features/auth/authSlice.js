import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    user: [],
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: {
            reducer: (state, action) => {
                state.user = action.payload
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
                state.user.find(user => user.email === action.payload.email && user.password === action.payload.password)
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
        setCredentials: {
            reducer: (state, action) => {
                state.userInfo = action.payload;
                localStorage.setItem('userInfo', JSON.stringify(action.payload))
            },
            prepare: (id, role) => {
                return {
                    payload: {
                        id,
                        role,
                    },
                }
            },
        },
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo')
        },
        extraReducers: {
            // [register.pending]: (state, action) => {
            //     state.status = 'loading'
            // },
            // [register.fulfilled]: (state, action) => {
            //     state.status = 'succeeded'
            //     state.user = action.payload
            // },
            // [register.rejected]: (state, action) => {
            //     state.status = 'failed'
            //     state.error = action.error.message
            // },
        }
    }
})

export const selectUser = (state) => state.auth.user;
export const selectUserInfo = (state) => state.auth.userInfo;

export const { register, login, setCredentials, logout } = authSlice.actions;

export default authSlice.reducer