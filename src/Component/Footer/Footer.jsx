import React from 'react'
import './Footer.css'
import Wave from '../image/waven1.png'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'

const Footer = () => {
  return (
    <>

        <img src={Wave} alt="" style={{width:"100%"}} className='wave' />
    <div className="footer">

       <div className="f-content">
       <span>prisanssingh17@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/prisans-singh-2ba965253/">

            <Linkedin color='white' size='3rem' />

          </a>

          <a href="https://github.com/Prisans">

            <Github color='white' size='3rem' />
          </a>
            <Facebook color='white' size='3rem' />
        </div>
       </div>

    </div>
    </>
  )
}

export default Footer