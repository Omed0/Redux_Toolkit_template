import { useParams } from 'react-router-dom'

export default function ProfileUser() {
    const { id } = useParams()
    return (
        <div className=''>
            <h2 className=''>This Is Profile: {id}</h2>
        </div>

    )
}
