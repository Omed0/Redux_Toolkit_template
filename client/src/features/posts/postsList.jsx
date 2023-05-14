import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";


function postsList() {
    const posts = useSelector(selectAllPosts)
    const renderedPost = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPost}
        </section>
    )
}

export default postsList