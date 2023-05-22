import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import App from './App.jsx'
import About from './pages/About/about.jsx'
import ErrorBoundary from './components/error/error-page'
import NoMatch from './components/error/noMatch'
import { store } from './app/store.js';
import { Provider } from 'react-redux'

import { fetchUsers } from './features/users/usersSlice'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    // children: [
    //   {
    //     path: ":id",
    //     element: <ProfileUser />,
    //   },
    // ],
  },
  {
    path: "about",
    element: <About />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    element: <NoMatch />,
    errorElement: <ErrorBoundary />,
  },
]);

store.dispatch(fetchUsers())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)