import React from 'react'
import { useRouteError } from 'react-router-dom'

const errorPae = () => {
  const error = useRouteError();  
  return (
    <div>errorPae</div>
  )
}

export default errorPae