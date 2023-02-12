import React from 'react'
import { Link, Outlet, userLoaderData } from 'react-router-dom'
import { getContacts} from '../Contact'

export const loarder = async() =>{
  const contacts = await getContacts();
  return { contacts}
}

const root = () => {
  const { contacts} = userLoaderData();
  return (
          <>
            <div id="sidebar">
              <h1>React Router Contacts</h1>
              <div>
                <form id="search-form" role="search">
                  <input
                    id="q"
                    aria-label="Search contacts"
                    placeholder="Search"
                    type="search"
                    name="q"
                  />
                  <div
                    id="search-spinner"
                    aria-hidden
                    hidden={true}
                  />
                  <div
                    className="sr-only"
                    aria-live="polite"
                  ></div>
                </form>
                <form method="post">
                  <button type="submit">New</button>
                </form>
              </div>
              <nav>
                
              </nav>
            </div>
            <div id="detail">
              <Outlet/>
            </div>
          </>
  )
}

export default root