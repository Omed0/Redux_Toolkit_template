import Post from './post/Post'
import { useEffect } from 'react'

import { useSelector } from "react-redux"
import { selectAllPosts, getPostStatus, getPostError } from "../../features/posts/postSlice"

export default function Posts() {

    // const dispatch = useDispatch()

    const posts = useSelector(selectAllPosts)
    const status = useSelector(getPostStatus)
    const error = useSelector(getPostError)

    useEffect(() => {

    }, [status, posts, error])

    return (
        <section className='p-6'>
            <h1 className='text-3xl font-semibold'>this is Post List</h1>
            {
                (status === 'loading') ?
                    <h2>loading...</h2>
                    :
                    (status === 'success') ?
                        posts .map((post) => <Post id={post.id} post={post} />)
                        :
                        (status === 'failed') ?
                            <h1> error: {error}</h1>
                            :
                            <h3>there is no post yet</h3>
            }
        </section >
    )
}


