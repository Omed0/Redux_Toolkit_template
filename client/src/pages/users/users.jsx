import { Outlet } from "react-router-dom";

export default function Users() {
    return (
        <div className="flex">
            <section className="">
                <h1>Users</h1>
                <p>hello this is Users Page List</p>
            </section>
            <Outlet />
        </div>
    )
}
