import React from 'react'
import { useRouteError } from 'react-router-dom'

const errorPae = () => {
  const error = useRouteError();  
  console.log(error)
  return (
    <div className='error-page'>
        
    </div>
  )
}

export default errorPae