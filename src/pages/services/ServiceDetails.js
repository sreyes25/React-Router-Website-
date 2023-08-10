import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function ServiceDetails() {
  
    const { id } = useParams()
    const service = useLoaderData()
  
    return (
    <div className='service-details'>
        <p>{service.id}</p>
        <p>{service.category}</p>
        <p>{service.title}</p>

        <div className="details">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum enim molestiae numquam veritatis quibusdam! Repellendus facilis numquam a officiis, voluptas illo eum pariatur harum, quidem ex fugit ducimus omnis laboriosam.</p>
        </div>
    </div>
  )
}

//loader
export const serviceDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch('http://localhost:4000/services/'+ id)

    if (!res.ok) {
        throw Error('Could not find that service')
    }

    return res.json()
}