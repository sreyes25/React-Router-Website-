import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div className='help-layout' >

    <h2>Website Help</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facilis assumenda sunt molestiae illo? Ipsum, quam autem quaerat beatae corporis accusantium cumque ducimus alias mollitia illum amet placeat, eveniet aperiam!</p>

    <nav>
    <NavLink to="faq">View the FQA</NavLink>
    <NavLink to="contact">Contact</NavLink>
    </nav>

    <Outlet />

    </div>
  )
}
