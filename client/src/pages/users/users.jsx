import { useSelector } from "react-redux"
import { selectUser } from "../../features/auth/authSlice"

export default function Users() {

    const { user } = useSelector(selectUser)


    return (
        <div className="flex">
            <section className="">
                <h1>Users</h1>
                <p>hello this is Users Page List</p>
            </section>
        </div>
    )
}
