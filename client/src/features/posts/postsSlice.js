import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: "1", title: "Redux Toolkit!",
        content: "You Should Learn Redux Toolkit form Managmnet State!",
        date: sub(new Date(), { minutes: 10 }).toISOString()
    },
    {
        id: "2", title: "Next JS",
        content: "NextJS is improve SEO performance",
        date: sub(new Date(), { minutes: 5 }).toISOString()
    },
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId
                    }
                }
            }
        },
    }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer