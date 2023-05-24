import { useParams } from 'react-router-dom'

export default function ProfileUser() {
    const { id } = useParams()
    return (
        <div className=''>
            <h2 className=''>This Is Profile User {id}</h2>
        </div>

    )
}
