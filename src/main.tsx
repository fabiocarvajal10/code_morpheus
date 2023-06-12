import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root'

import { createHashRouter, RouterProvider } from 'react-router-dom'
import LayoutProvider from './theme/LayoutProvider'
import ResumeView from './views/Resume'
import AboutView from './views/About'
import ManifestoView from './views/Manifesto'
import NotFoundView from './views/NotFound'
import HomeView from './views/Home'

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomeView /> },
      { path: "about", element: <AboutView /> },
      { path: "resume", element: <ResumeView /> },
      { path: "manifesto", element: <ManifestoView /> },
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
