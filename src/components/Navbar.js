import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    //set click to the opposite, switches to true and back to false if clicked
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    return (
       <>
        <nav className="navbar">
            <div className="navbar-container">
            <Link to="/" className="navbar-logo">
            <i className="fas fa-laptop-code" />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu-active ' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to="/" className='nav-links' onClick={closeMenu}>About Me</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/" className='nav-links' onClick={closeMenu}>Skills</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/" className='nav-links' onClick={closeMenu}>Projects</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/" className='nav-links' onClick={closeMenu}>Contact Me</Link>
                </li>

            </ul>

            </div>
        </nav>
       </>
    )
}

export default Navbar;