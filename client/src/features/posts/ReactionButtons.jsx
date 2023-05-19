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
        <button
            key={name}
            type="button"
            className="reaction-button"
            onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
        >
            {emoji} {post.reactions[name]}
        </button>
    })

    return (
        <div>{reactionButtons}</div>
    )
}
