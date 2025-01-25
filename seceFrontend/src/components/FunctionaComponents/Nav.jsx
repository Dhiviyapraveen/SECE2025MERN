import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css";

const Nav = () => {
  const [mdropDown, setmDropdown] = useState(false);
  const [hdropDown, sethDropdown] = useState(false);

  const togglemDropdown = () => {
    setmDropdown((prevState) => !prevState);
  };
  const togglehDropdown = () => {
    sethDropdown((prevState) => !prevState);
  };

  return (
    <header>
      <nav>
        <ol>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="link">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>


          <li
            className="dropdown"
            onMouseEnter={togglehDropdown}
            onMouseLeave={togglehDropdown}
          >
            <span className="link">Hooks</span>
            {hdropDown && (
              <ul className="dropdown-box">
                <li>
                  <Link to="/use-state" className="link">
                    useState
                  </Link>
                </li>
                <li>
                  <Link to="/use-effect" className="link">
                    useEffect
                  </Link>
                </li>
                <li>
                  <Link to="/use-api" className="link">
                    useAPI
                  </Link>
                </li>
                <li>
                  <Link to="/use-reducer" className="link">
                    useReducer
                  </Link>
                </li>
                <li>
                  <Link to="/use-image" className="link">
                    useAPIimg
                  </Link>
                </li>
                <li>
                  <Link to="/use-ref" className="link">
                    useRef
                  </Link>
                </li>
                <li>
                  <Link to="/use-memo" className="link">
                    useMemo
                  </Link>
                </li>
                <li>
                  <Link to="/use-callback" className="link">
                    useCallback
                  </Link>

                </li>
                <li>
                  <Link to="/react-lifecyclemethods" className="link">
                    Lifecycle
                  </Link>
                </li>
                <li>
                  <Link to="/classcomponent" className="link">
                    Class-compo
                  </Link>
                </li>
                <li>
                  <Link to="/use-context" className="link">
                    useContext
                  </Link>
                </li>
                <li>
                  <Link to="/custom-hooks" className="link">
                    Custom-hooks
                  </Link>
                </li>
                <li>
                  <Link to="/local-storage" className="link">
                    Local-storage
                  </Link>
                </li>
                <li>
                  <Link to="/hoc" className="link">
                   Hoc
                  </Link>
                </li>

              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={togglemDropdown}
            onMouseLeave={togglemDropdown}
          >
            <span className="link">Memoization</span>
            {mdropDown && (
              <ul className="dropdown-box">
                <li>
                  <Link to="/memo" className="link">
                    memo
                  </Link>
                </li>
                <li>
                  <Link to="/lazy-suspense" className="link">
                    Lazy-suspense
                  </Link>
                </li>
                </ul>
            )}
          </li>
        </ol>
      </nav>
    </header>
  );
};



export default Nav