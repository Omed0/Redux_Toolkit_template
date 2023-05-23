import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
// import { set } from "date-fns";

export default function addPostForm() {

    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers)
    const [postData, setPostData] = useState(
        {
            title: '',
            content: '',
            userId: 0,
        }
    )
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(postData)
        setPostData({
            ...postData,
            [name]: value
        })
    }

    const canSave = [postData.title, postData.content, postData.userId].every(Boolean) && addRequestStatus === 'idle'

    const onSavePostClicked = () => {
        try {

            if (canSave) {
                setAddRequestStatus('pending')
                dispatch(addNewPost({ title: postData.title, body: postData.content, userId: postData.userId }))
            }

            setPostData({ title: '', content: '', userId: '' })

        } catch (err) {
            console.error('Failed to save the post: ', err.message);
        } finally {
            setAddRequestStatus('idle')
        }
    }

    const usersOptions = users.map(user => {
        return (
            <option key={user.id} value={user.id}>
                {user.name}
            </option>
        )
    })


    return (
        <section className="flex flex-col min-w-[18rem] items-start p-4 gap-4">
            <h2 className="text-2xl">Add a New Post</h2>
            <form className="flex flex-col gap-4">
                <label htmlFor="title">Post Title:</label>
                <input
                    className="w-96 p-2 px-4 border-2 rounded-md border-white outline-none"
                    type="text"
                    id="title"
                    name="title"
                    onChange={handleChange}
                    value={postData.title}
                />
                <label htmlFor="postAuther">Author:</label>
                <select className="border-2 border-white rounded-md p-2" value={postData.userId} name="userId" id="postAuther" onChange={handleChange} >
                    {usersOptions}
                </select>

                <label htmlFor="content">Post Content:</label>
                <textarea
                    className="w-96 p-2 border-2 rounded-md border-white outline-none resize-none"
                    id="content"
                    name="content"
                    onChange={handleChange}
                    value={postData.content}
                />
                <button
                    className="border-2 border-white "
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}
