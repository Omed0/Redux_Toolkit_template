import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPostSuccess } from "../../../features/posts/postSlice"

export default function AddPost() {

    const dispatch = useDispatch()

    const [data, setData] = useState({
        title: "",
        body: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            dispatch(addPostSuccess(data.title, data.body))
        }
        catch (err) {
            throw new Error(err)
        }
        setData({
            title: '',
            body: ''
        })
    }

    const canSave = [data].every(Boolean) //&& addRequestStatus === 'idle';

    return (
        <div className="mt-5 m-auto max-w-2xl p-8">
            <h2 className="text-2xl font-semibold">This Is AddPost</h2>
            <form onSubmit={handleSubmit} className="py-6 gap-6 grid grid-cols-1">
                <input className="input" type="text" name="title" onChange={handleChange} value={data.title} placeholder="Title" />
                <input className="input" type="text" name="body" onChange={handleChange} value={data.body} placeholder="Body" />
                <button disabled={!canSave} className="btn mt-6" type="submit">Add Post</button>
            </form>
        </div>
    )
}
