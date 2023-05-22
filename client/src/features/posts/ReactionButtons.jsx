import { useDispatch } from "react-redux"
import { reactionAdded } from "./postsSlice"

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

export default function ReactionButtons({ post }) {

    const dispatch = useDispatch();
    const reactionButton = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="border-2 border-gray-200 mr-2 mt-4"
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return (
        <div>{reactionButton}</div>
    )
}
