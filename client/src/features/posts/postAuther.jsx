import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'


export default function PostAuther(userId) {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId)

    return (
        <span className='text-base font-mono'>By &nbsp;
            <span className='text-lg text-gray-500'>{author ? author.name : 'Unknown Author'}</span>
        </span>
    )
}
