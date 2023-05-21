import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuther from "./postAuther";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

export default function postsList() {
    const posts = useSelector(selectAllPosts)

    const orderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPost = orderPosts.map(post => (
        <article key={post.id} className="border-2 min-w-xs max-w-lg p-4 shadow shadow-slate-300 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="mt-6">
                <PostAuther userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <div className="">
                <ReactionButtons post={post} />
            </div>
        </article>
    ))

    return (
        <section className="flex flex-col gap-3 p-3">
            <h2 className="text-3xl">Posts</h2>
            {renderedPost}
        </section>
    )
}
