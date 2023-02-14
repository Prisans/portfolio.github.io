import React from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t7dzp6l', 'template_vrpxhwa', form.current, 'fHhiPzMPQw5IfPi_r')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="contact-form" id='Contact' >

    {/* <------------------LEFT SIDE-----------------------> */}

        <div className="c-left">
            <div className="awesome">
                <span>Get In Touch</span> 
                <span>Contact Me</span>
                <div style={{background: "#ABF1FF94"}} ></div>
            </div>
        </div>

    {/* <--------------------------RIGHT SIDE-------------------------> */}

    <div className="c-right">
        <form ref={form} onSubmit={sendEmail} >
            <input type="text" name='user_name' className='user' placeholder='Name' />
            <input type="email" name='user_email' className ='user' placeholder='Email' />
            <textarea name="message" className='user' placeholder='Message' ></textarea>
            {/* <input type="submit" value='Send' className='button'  /> */}
            <button type="submit" value='Send' className='button' onClick={Contact} >Submit</button>
            <div className='blur c-blur1' style={{background:"var(--purple)"}} ></div>
        </form>
    </div>

    </div>
  )
}

export default Contact