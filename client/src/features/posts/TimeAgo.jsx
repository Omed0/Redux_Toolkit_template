import { parseISO, formatDistanceToNow } from "date-fns";

export default function TimeAgo({ timestamp }) {

    let timeAgo = ''
    if (timestamp) {
        const data = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(data)
        timeAgo = `${timePeriod} ago`
    }

    return (
        <span title={timeAgo}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}
