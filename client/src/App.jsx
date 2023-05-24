import Home from './pages/Home/home'
import About from './pages/About/about'

import { Routes, Route } from 'react-router-dom'
//layouts
import Layout from './components/layouts/Layout'
import NoMatch from './components/error/noMatch'
import ErrorPage from './components/error/error-page'
//users
import Users from './pages/Users/users'
import ProfileUser from './pages/Users/user/profileUser'


function App() {

  return (
    <main>
      <Routes>

        <Route path="/" errorElement={<ErrorPage />} element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<About />} />
          {/* <Route path="post">
            <Route index element={<AddPostForm />} />
            <Route path=":postId" element={<SinglePostPage />} />
            <Route path="edit/:postId" element={<EditPostForm />} />
          </Route> */}
          <Route path="user">
            <Route index element={<Users />} />
            <Route path=":id" element={<ProfileUser />} />
          </Route>
        </Route>

        <Route path="*" element={<NoMatch to="/" />} />

      </Routes>
    </main>
  )
}

export default App
