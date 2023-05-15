import { useState } from "react";
import { useDispatch } from "react-redux";

import { postAdded } from "./postsSlice";

export default function AddPostForm() {
    const dispatch = useDispatch()

    const [postData, setPostData] = useState([
        {
            title: '',
            content: ''
        }
    ])
    const handleChange = (e) => {
        const { name, value } = e.target
        setPostData({
            ...postData,
            [name]: value
        })

        const onSavePostClicked = () => {
            if (postData) {
                dispatch(
                    postAdded(postData)
                )
                setPostData([{ title: '', content: '' }])
            }
        }


        return (
            <section className="flex flex-col min-w-min max-w-md items-start p-4 gap-4">
                <h2 className="text-2xl">Add a New Post</h2>
                <form className="flex flex-col gap-4">
                    <label htmlFor="postTitle">Post Title:</label>
                    <input
                        className="w-96 max-w-lg p-2 px-4 border-2 rounded-md border-white outline-none"
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        onChange={handleChange}
                    />
                    <label htmlFor="postContent">Content:</label>
                    <textarea
                        className="w-96 max-w-lg p-2 border-2 rounded-md border-white outline-none"
                        id="postContent"
                        name="postContent"
                        onChange={handleChange}
                    />
                    <button
                        className="border-2 border-white "
                        type="button"
                        onClick={onSavePostClicked}
                    >Save Post</button>
                </form>
            </section>
        )
    }
}