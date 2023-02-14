import React from 'react'
// import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Prisans</div>
            {/* <Toggle/> */}
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType : 'none'}} >

                    <Link spy={true} to='Home' activeClass='activeClass' smooth={true} >

                    <li>Home</li>
                    </Link>

                    <Link spy={true} to='Services' smooth={true} activeClass='activeClass' >
                    <li>Services</li>
                    </Link>

                    <Link spy={true} to='Skills' smooth={true} activeClass='activeClass' >
                    <li>Skills</li>
                    </Link>

                    <Link spy={true} to='Contact' smooth={true} activeClass='activeClass' >
                    <button className='button n-button' >Contact</button>
                    {/* <li>Contact</li> */}
                    </Link>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar