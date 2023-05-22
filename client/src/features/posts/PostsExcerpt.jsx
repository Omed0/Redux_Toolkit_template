
import PostAuthor from "./postAuther";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";


export default function PostsExcerpt({ post }) {
    return (
        <article className="border-2 min-w-xs max-w-lg p-4 shadow shadow-slate-300 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>
            <p className="mt-6">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <div className="">
                <ReactionButtons post={post} />
            </div>
        </article>
    )
}
