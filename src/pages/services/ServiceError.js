import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function ServiceError() {

    const error = useRouteError

  return (
    <div className='services-error'>
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to="/" >Back to the homepage</Link>
    </div>
  )
}
