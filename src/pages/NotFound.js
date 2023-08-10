import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h2>Page Not Found</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, ipsam ipsa. Sapiente optio fuga totam laboriosam dolorem fugiat asperiores, ea vero unde delectus eligendi voluptatibus voluptas neque quo possimus corrupti!</p>

        <p>Go to the <Link to="/">Homepage</Link>.</p>

    </div>
  )
}
