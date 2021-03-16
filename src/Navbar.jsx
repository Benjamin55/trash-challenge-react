import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import Button from './Button';

function Navbar() {

    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)

        }else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton);


    return <div>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Trash Challenge  <i className='fab fa-pagelines'></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu} >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu} >About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/donations' className='nav-links' onClick={closeMobileMenu} >Donations</Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>Sign Up</Button>} */}
                </div>
            </nav>
        </div>
}

export default Navbar


 // <div className='navbar'>
        //     <Link to='/' style={{ textDecoration: 'none' }}>
        //     <h3>Trash Challenge</h3>
        //     </Link>
        //     <ul className='links'>
        //         <Link to='/about' style={{ textDecoration: 'none' }}>
        //             <li>About</li>
        //         </Link>
        //         <Link to='/donations' style={{ textDecoration: 'none' }}>
        //             <li>Donations</li>
        //         </Link>
        //     </ul>
        // </div>