import React from 'react'
import { Form, Link, Outlet, useLoaderData } from 'react-router-dom'
import { getContacts, createContact} from '../Contact'

export const action = async () =>{
  const contact = createContact();
  return { contact}
}
export const loader = async() =>{
  const contacts = await getContacts();
  return { contacts}
}

const root = () => {
  const { contacts} = useLoaderData();
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
                <Form method="post">
                  <button type="submit">New</button>
                </Form>
              </div>
              <nav>
                {
                  contacts.length ? (
                    <ul>
                      {
                        contacts.map ((contact) => {
                          return(
                            <li key={contact.id}>
                              <Link to={`contacts/${contact.id}`}>
                                {
                                  contact.first || contact.last ? (
                                    <>
                                      {contact.first || contact.last}
                                    </>
                                  ):(
                                    <i>No name</i>
                                  )
                                }{" "}
                                {contact.favorite && <span>★</span>}
                              </Link>
                            </li>
                          )
                        })
                      }
                    </ul>
                  ):(
                    <p>
                      <i>No contacts</i>
                    </p>
                  )
                }
              </nav>
            </div>
            <div id="detail">
              <Outlet/>
            </div>
          </>
  )
}

export default root