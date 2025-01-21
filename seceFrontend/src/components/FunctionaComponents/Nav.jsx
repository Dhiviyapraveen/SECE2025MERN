import React from 'react'
import {Link} from 'react-router-dom'
import "./Nav.css";

const Navbar = () => {
 var styling={textDecoration:"underline",
  color:"blue",
  listStyletype:"none",
  textalign:"center",
 }
  return (
    <header>
    <nav>
      <ol>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Gallery'>Gallery</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
      </ol>
    </nav>
    </header>
  )
}

export default Navbar