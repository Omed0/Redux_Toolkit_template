import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "Redux Toolkit!", content: "You Should Learn Redux Toolkit form Managmnet State!" },
    { id: "2", title: "Next JS", content: "NextJS is improve SEO performance" },
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer