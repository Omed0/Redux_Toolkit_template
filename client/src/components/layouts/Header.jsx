import { Link } from "react-router-dom"

const Header = () => {

    return (
        <header className="Header">
            <h1>Redux Blog</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <ul>
                        <li><Link to="post">Post</Link></li>
                        <li><Link to="post/create">AddPost</Link></li>
                        {/* <li><Link to="">AllMyPosts</Link></li> */}
                    </ul>
                    <li><Link to="user">Users</Link></li>
                    <li className="p-2 rounded-lg bg-slate-600 hover:bg-slate-700"><Link to="auth">Sign In</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header