import { useDispatch } from "react-redux"
import { reactionAdded } from "./postsSlice"

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😯',
    heart: '💖',
    rocket: '🚀',
    coffee: '🍵'
}

export default function ReactionButtons({ post }) {

    const dispatch = useDispatch();
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                className="border-2 border-gray-200 mr-2 mt-4"
                key={name}
                type="button"
                onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return (
        <div>{reactionButtons}</div>
    )
}
