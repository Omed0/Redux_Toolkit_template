import { useSelector } from "react-redux"
import { selectUser, selectUserInfo } from "../../features/auth/authSlice"

export default function Users() {

    const { user } = useSelector(selectUser)
    const { userInfo } = useSelector(selectUserInfo)
    
    return (
        <div className="flex">
            <section className="">
                <h1>Users</h1>
                <p>hello this is Users Page List</p>
            </section>
        </div>
    )
}
