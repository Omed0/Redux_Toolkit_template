import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import App from './App.jsx'
import About from './pages/About/about.jsx'
import ErrorBoundary from './components/error/error-page'
import NoMatch from './components/error/noMatch'
// import { store } from './app/store.js';
// import { Provider } from 'react-redux'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter({
  routes: [
    {
      path: '/',
      action: () => import('./pages/Home/Home.jsx'),
      Element: <App />,
      errorElement: <ErrorBoundary />,
      // children: [
      //   {
      //     path: ":id",
      //     element: <ProfileUser />,
      //   },
      // ],
    },
    {
      path: '/about',
      action: () => import('./pages/About.jsx'),
      Element: <About />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "*",
      element: <NoMatch />,
      errorElement: <ErrorBoundary />,
    },
  ]
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>
)