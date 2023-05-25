import { useSelector } from "react-redux"
import { selectAllPosts } from "../../features/posts/postSlice"

export default function Posts() {

    const posts = useSelector(selectAllPosts)

    return (
        <div>
            <h1>this is Post List</h1>
            <section>
                {posts.map(post => (
                    <article key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </article>
                ))}
            </section>
        </div>
    )
}
