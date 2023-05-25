import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPostsLoading: (state, action) => {
            state.status = 'loading'
        },
        getPostsSuccess: (state, action) => {
            state.status = 'success'
            state.posts = action.payload
        },
        addPostSuccess: (state, action) => {
            state.status = 'success'
            state.posts.push(action.payload)
        },
        deletePostSuccess: (state, action) => {
            state.status = 'success'
            state.posts = state.posts.filter(post => post._id !== action.payload)
        },
        PostsFailure: (state, action) => {
            state.status = 'failure'
            state.error = action.payload
        },
    }
})

export const selectAllPosts = state => state.post.posts

export const { getPostsLoading, getPostsSuccess, addPostSuccess, deletePostSuccess, PostsFailure } = postSlice.actions;

export default postSlice.reducer