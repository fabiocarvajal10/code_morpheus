import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutProvider from './theme/LayoutProvider'
import ResumeView from './views/Resume'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <ResumeView /> },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LayoutProvider>
      <RouterProvider router={router} />
    </LayoutProvider>
  </React.StrictMode>,
)
