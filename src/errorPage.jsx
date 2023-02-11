import React from 'react'
import { useRouteError } from 'react-router-dom'

const errorPae = () => {
  const error = useRouteError();  
  console.log(error)
  return (
    <div id='error-page'>
        <h1>Ooops!</h1>
        <p>Sorry, unexpected error has occurred.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
  )
}

export default errorPae