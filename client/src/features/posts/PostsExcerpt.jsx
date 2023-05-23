
import PostAuthor from "./postAuther";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";


export default function PostsExcerpt(post) {
    return (
        <article key={post.post.userId} className="border-2 min-w-xs max-w-lg p-4 shadow shadow-slate-300 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">{post.post.title}</h3>
            <p>{post.post.body.substring(0, 100)}</p>
            <p className="mt-6">
                <PostAuthor userId={post.post.userId} />
                <TimeAgo timestamp={post.post.date} />
            </p>
            <div className="">
                <ReactionButtons post={post.post} />
            </div>
        </article>
    )
}
