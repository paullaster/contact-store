import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider
      } from 'react-router-dom'
import Root, {
  action as rootAction,
  loader as rootLoader
} from './routes/root'
import ErrorPage from './errorPage'
import Contact, {
  loader as contactLoader,
} from './routes/contact'
import EditContact, {
  loader as editContactLoader,
} from './routes/editContact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    action: rootAction,
    loader: rootLoader,
    children:[
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
