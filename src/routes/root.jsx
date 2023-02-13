import React, {useRef, useEffect} from 'react'
import {
   Form, 
   NavLink, 
   Outlet, 
   redirect, 
   useLoaderData,
   useNavigation
   } from 'react-router-dom'
import { getContacts, createContact} from '../Contact'

export const action = async () =>{
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);

}
export const loader = async({request}) =>{
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q}
}

const root = () => {
  const { contacts, q} = useLoaderData();
  const navigation = useNavigation ();
  const query = useRef("");
  useEffect ( () => {

  }, [query])
  return (
          <>
            <div id="sidebar">
              <h1>React Router Contacts</h1>
              <div>
                <Form id="search-form" role="search">
                  <input
                    id="q"
                    aria-label="Search contacts"
                    placeholder="Search"
                    type="search"
                    name="q"
                    defaultValue={q}
                    ref={query}
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
                </Form>
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
                              <NavLink
                               to={`contacts/${contact.id}`}
                               className={
                                ({isActive, isPending}) => {
                                  return isActive ? 'active' : isPending ? 'pending' : '';
                                }
                               }
                               >
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
                              </NavLink>
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
            <div 
            id="detail"
            className={
              navigation.state === "loading" ? "loading" : ""
            }
            >
              <Outlet/>
            </div>
          </>
  )
}

export default root