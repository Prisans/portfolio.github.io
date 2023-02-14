import React from 'react'
import './Intro.css'

import Emoji from '../image/coding1.png'
import Ux from '../image/ux.png'
import Crown from '../image/cro.png'
import Boy from '../image/cool1.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { motion } from 'framer-motion'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import { Link } from 'react-scroll'



const Intro = () => {

    const transition = { duration: 2, type: 'spring' }
    return (
        <div className="intro" id='Home' >
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Prisans Singh</span>
                    <span>Frontend Developer with high level of experience in web designing and development , producting the Quality work</span>
                </div>

                <Link spy={true} to='Contact' smooth={true} activeClass='activeClass' >

                    <button className="button i-button"  >Hire Me</button>
                </Link>
                <div className="i-icons">
                    <a href="https://www.linkedin.com/in/prisans-singh-2ba965253/">
                        {/* <button className='button i-i-button' >LinkedIn</button> */}
                        <Linkedin color='var(--orange)' size='3rem' />
                    </a>
                    <a href="#">
                        {/* <button className='button i-i-button' >Facebook</button> */}
                        <Facebook color='var(--orange)' size='3rem' />
                    </a>
                    <a href="https://github.com/Prisans">
                        {/* <button className='button i-i-button' >Instagram</button> */}
                        <Github color='var(--orange)' size='3rem' />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Boy} alt="" />
                <motion.img

                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}

                    src={Emoji} alt="" />
                <div


                    style={{ top: '-4%', right: '-1%' }}

                    className='floating-div'
                >
                    <FloatingDiv image={Crown} text1='Web' text2='Developer' />
                </div>

                <motion.div

                    initial={{ left: '9rem', top: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}



                    style={{ top: '16rem', left: '4rem' }}

                    className='floating-div'
                >
                    <FloatingDiv image={Ux} text1='UX/UI' text2='Developer' />
                </motion.div>

                {/* blur divs */}

                <div className="blur" style={{ background: "rgb(238 210 255)" }} ></div>
                <div className="blur" style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'

                }} ></div>
            </div>
        </div>
    )
}

export default Intro