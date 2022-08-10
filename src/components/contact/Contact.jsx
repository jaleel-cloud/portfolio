import React from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
import { ThemeContext } from "../../Context";
import { useContext } from "react";
import Jump from 'react-reveal/Jump';
import Slide from 'react-reveal/Slide';


export const Contact = () => {
    const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_bo27lu7', 'template_is4csfd', form.current, 'F3IzB9nukO3dSJ620')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="contact">
        <Slide left>
        <div className="c-left">
            <span style={{color:darkmode?'white' :''}}> Get in Touch !</span>
            <span>Hire me </span>
            <span style={{color:darkmode?'white' :''}}>Hire me for any service related to web development with MERN Stack</span>
        </div>
        </Slide>






            <Jump>
        <div className="c-right">
            <div className="form">
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="text">Name:</label>
                    <input type="text" className='user' name='user_name' />
                    <label htmlFor="email">Email : </label>
                    <input type="email" name="user_email" id=""  className='user'/>
                    <label htmlFor="Message" > Message :</label>
                    <textarea name="message" className='area' cols="20" rows="3"></textarea>
                    <input type="submit" className='submit'/>
                </form>
            </div>
        </div>
            </Jump>
    </div>
  )
}
