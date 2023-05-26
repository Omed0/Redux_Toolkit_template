import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import postSlice from "../features/posts/postSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice,
        posts: postSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV !== 'production',
})
