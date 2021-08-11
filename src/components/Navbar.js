import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    //set click to the opposite, switches to true and back to false if clicked
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
       <>
        <nav className="navbar">
            <div className="navbar-container">
            <Link to="/" className="navbar-logo">
            CP Codes <i className="fas fa-laptop-code" />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu-active ' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to="/about" className='nav-links' onClick={closeMobileMenu}>About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/skills" className='nav-links' onClick={closeMobileMenu}>Skills
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/projects" className='nav-links' onClick={closeMobileMenu}>Projects
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>Contact Me
                    </Link>
                </li>

            </ul>
            {button && <Button buttonStyle='btn--outline'>About</Button>}

            </div>
        </nav>
       </>
    )
}

export default Navbar;