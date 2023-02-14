import React from 'react'
import './Services.css'
import Care from '../image/careemoji.png'
import Attitude from '../image/atti.png'
import UXUI from '../image/ui1.png'
import Card from '../Card/Card'
import {motion} from 'framer-motion'

const Services = () => {
  const transition = {duration : 1 , type : 'spring'}
  return (
    <div className="services" id='Services' >
        {/* left side */}
        <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dignissimos placeat maxime.
            <br />
            Lorem ipsum dolor sit amet.
        </span>
        <div className='blur s-blur1' style={{background:"#ABF1FF94"}} ></div>

        <button className='button s-button' >Download CV</button>
        </div>

        {/* right side */}

        <div className="cards">
          <motion.div 

          initial={{left:'25%'}}
          whileInView={{left:'8rem'}}
          transition={transition}
          
          style={{left:'19rem'}}>
            <Card
            emoji={Care}
            heading={'Design'}
            detail={'photoshop , canva , adobe'}
            />
          </motion.div>

            {/* SECOND CARD */}

            <motion.div 

initial={{left:'25%'}}
whileInView={{left:'24rem'}}
transition={transition}

            style={{top:"12rem" , left:"-6rem"}} >
                <Card
                emoji={Attitude}
                heading={"Developer"}
                detail={"HTML , CSS , Javascript , React Js"}
                />
            </motion.div>

            {/* third card */}

            <motion.div 

initial={{left:'25%'}}
whileInView={{left:'5rem'}}
transition={transition}

            style={{top:"28rem" , left:"17rem"}} className='emoji' >
                <Card
                emoji={UXUI}
                heading={"UX/UI"}
                detail={"I make amazing UX/UI designs"}
                />
            </motion.div>

            <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>

        </div>
    </div>
  )
}

export default Services