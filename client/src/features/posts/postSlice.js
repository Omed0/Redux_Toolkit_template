import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'


const initialState = {
    posts: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

let min = 1;

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPostSuccess: {
            reducer: (state, action) => {
                state.status = 'success'
                state.posts.push(action.payload)
            },
            prepare: (title, body) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        body,
                        since: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
                    },
                }
            }
        },

        deletePostSuccess: (state, action) => {
            state.status = 'success'
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },
    }
})

export const selectAllPosts = (state) => state.posts.posts;
export const getPostStatus = (state) => state.posts.status;
export const getPostError = (state) => state.posts.error;


export const { addPostSuccess, deletePostSuccess } = postSlice.actions;

export default postSlice.reducer