import React from 'react'
import { useRouteError } from 'react-router-dom'

const errorPae = () => {
  const error = useRouteError();  
  console.log(error)
  return (
    <div className='error-page'>
        <h1>Ooops!</h1>
        <p>Sorry!, unexpected error has occurred.</p>
        <p>error.statusText || error.message</p>
    </div>
  )
}

export default errorPae