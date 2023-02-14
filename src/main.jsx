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
  action as contactAction
} from './routes/contact'
import EditContact, {
  action as editContactAction,
  loader as editContactLoader,
} from './routes/editContact'
import {action as destroyContactAction} from './routes/deleteContact'
import Index from './routes/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    action: rootAction,
    loader: rootLoader,
    children:[
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        action: contactAction,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        action: editContactAction,
        loader: editContactLoader,
      },
      {
        path: 'contacts/:contactId/destroy',
        action: destroyContactAction,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
