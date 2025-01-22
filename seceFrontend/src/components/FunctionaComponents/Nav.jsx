import {useState} from 'react'
import {Link} from 'react-router-dom'
import "./Nav.css";

const Nav = () => {
  var [dropdown,setDropdown] = useState(false)

  return (
    <header>
    <nav>
      <ol>
        <li><Link to='/' className="link" >Home</Link></li>
        <li><Link to='/about' className="link">About</Link></li>
        <li><Link to='/gallery'className="link">Gallery</Link></li>
        <div onMouseOver={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
          <span>Hooks</span>
          {dropdown &&(
          <ul>
            <li><Link to='use-state' >useState</Link></li>
            <li><Link to='/use-effect'>UseEffect</Link></li>
            <li><Link to='/use-api'>UseEffectAPI</Link></li>
          </ul>)}
        </div>
        <li><Link to='/contact'className="link">Contact</Link></li>
      </ol>
    </nav>
    </header>
  )
}

export default Nav