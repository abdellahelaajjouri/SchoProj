import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <ul >
      <li >
        <Link to="/" >home</Link>
      </li>
      <li >
      <Link  to="/counter">counter</Link>
      </li>
      <li >
      <Link  to="/bulb">bulb</Link>
      </li> 
      <li >
      <Link  to="/slider">slider</Link>
      </li>
      
    </ul>
  )
}

export default NavBar