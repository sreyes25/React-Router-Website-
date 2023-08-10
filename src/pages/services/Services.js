import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Services() {

    const services = useLoaderData()

  return (
    <div className='services'>
        {services.map(service => (
            <Link to={service.id.toString()} key={service.id}>
                <p>{service.category}</p>
                <p>{service.title}</p>

            </Link>
        ))}
    </div>
  )
}

//loader
export const servicesLoader = async () => {
    const res = await fetch('http://localhost:4000/services')

    if (!res.ok) {
        throw Error('Could not find that service')
    }

    return res.json()
}