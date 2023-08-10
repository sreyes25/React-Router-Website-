import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ServicesLayout() {
  return (
    <div className='services-layout'>
        <h2>Services</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quas delectus deleniti odit doloremque asperiores exercitationem porro, eveniet illo qui, velit sed et commodi libero eum corrupti repellat, error voluptatibus!</p>
        
        <Outlet />
    </div>
  )
}
