import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";


export default function postsList() {
    const posts = useSelector(selectAllPosts)
    const renderedPost = posts.map(post => (
        <article key={post.id} className="border-2 min-w-xs max-w-md p-4 shadow shadow-slate-300">
            <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
        </article>
    ))

    return (
        <section className="flex flex-col gap-3 p-3">
            <h2 className="text-3xl">Posts</h2>
            {renderedPost}
        </section>
    )
}
