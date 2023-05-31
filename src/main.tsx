import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutProvider from './theme/LayoutProvider'
import ResumeView from './views/Resume'
import AboutView from './views/About'
import ManifestoView from './views/Manifesto'
import PostsView from './views/Posts'
import NotFoundView from './views/NotFound'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <AboutView /> },
      { path: "/about", element: <AboutView /> },
      { path: "/resume", element: <ResumeView /> },
      { path: "/manifesto", element: <ManifestoView /> },
      { path: "/posts", element: <PostsView /> },
      {
        path: "*",
        element: <NotFoundView />,
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LayoutProvider>
      <RouterProvider router={router} />
    </LayoutProvider>
  </React.StrictMode>,
)
