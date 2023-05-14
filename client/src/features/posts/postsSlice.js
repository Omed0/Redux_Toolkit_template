import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "Redux Toolkit!", content: "You Should Learn Redux Toolkit form Managmnet State!" },
    { id: "2", title: "Next JS", content: "NextJS is improve SEO performance" },
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {

    }
})

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer