import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", name: "Omed Akram" },
    { id: "2", name: "Mira Cop" },
    { id: "3", name: "Qala Guzhula" },
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer