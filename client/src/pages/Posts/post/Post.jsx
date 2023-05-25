import { useParams } from 'react-router-dom'

export default function Post() {
    const { id } = useParams()

    return (
        <div className=''>
            <h2 className=''>This Is Post: {id}</h2>
        </div>

    )
}
