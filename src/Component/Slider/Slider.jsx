import React from 'react'
import './Slider.css'
import {Swiper , SwiperSlide} from 'swiper/react'
import ReactPic from '../image/react2.png'
import CSS from '../image/css1.png'
import HTML from '../image/html1.png'
import JS from '../image/js1.png'
import {Pagination} from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Slider = () => {

    const skills = [
        {
            img:ReactPic,
            review: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications in an efficient and organized manner. React was developed by Facebook and is widely used for building web and mobile applications.",
        },

        {
            img:HTML,
            review: "HTML (Hypertext Markup Language) is a standard markup language used for creating web pages and web applications. It provides a structure for content on the web by using a set of tags and attributes to define the content type, layout, and media on a page. HTML is the backbone of the web and is used in conjunction with other technologies such as CSS and JavaScript to create dynamic and interactive web pages.",
        },
        {
            img:CSS,
            review: "CSS (Cascading Style Sheets) is a stylesheet language used for describing the look and formatting of a document written in HTML or XML. It allows developers to separate the presentation of a website or application from its structure and content, making it easier to maintain and modify the design. CSS provides a wide range of styling options, including font, color, spacing, layout, and animation, enabling developers to create visually appealing and responsive web pages.",
        } ,

        {
            img:JS,
            review: "JavaScript is a high-level, interpreted programming language that is used primarily for creating dynamic and interactive effects within web browsers. It allows developers to add interactivity and logic to their websites, making them more engaging and user-friendly. JavaScript is an essential component of modern web development, and it is supported by all major web browsers. With its versatile and powerful features, JavaScript can be used to build everything from simple interactive effects to complex full-scale applications.",
        },
    ]

  return (
   <div className="s-wrapper" id='Skills' >
    <div className="s-heading">
        <span>It's My</span> <br />
        <span>Programming Skills</span>
        <div className='blur t-blur1' style={{background:"var(--purple)"}} ></div>
        <div className='blur t-blur2' style={{background:"skyblue"}} ></div>
    </div>

    {/* SWIPER */}

    <Swiper 
    
        modules = {[Pagination]}
        slidesPerView={1}
        Pagination={{clickable: true}}
    >

    {skills.map((skill , index)=>{
        return(
            <SwiperSlide key={index} >
                <div className="testimonial"  >
                <img src={skill.img} alt="" />
                <span>{skill.review}</span>

                </div>
            </SwiperSlide>
        )
    })}

    </Swiper>
   </div>
  )
}

export default Slider