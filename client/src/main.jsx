import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import App from './App.jsx'
//pages
import Home from './pages/Home/home'
import AddPost from './pages/Posts/addPost/AddPost'
import ListPosts from './pages/Posts/Posts'
import Post from './pages/Posts/post/Post'
//users
import Users from './pages/Users/users'
import ProfileUser from './pages/Users/user/profileUser'

import NoMatch from './components/error/noMatch'
import ErrorPage from './components/error/error-page'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import { store } from './app/store.js';
import { Provider } from 'react-redux'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />} element={<App />} >

      <Route index={true} element={<Home />} />

      <Route path='post' >
        <Route index={true} element={<ListPosts />} />
        <Route path='create' element={<AddPost />} />
        <Route path=':id' element={<Post />} />
      </Route>

      <Route path="user">
        <Route index={true} element={<Users />} />
        <Route path=":id" element={<ProfileUser />} />
      </Route>

      <Route path="*" element={<NoMatch to="/" />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)