import React from 'react'
import "./footer.css"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Github from "@iconscout/react-unicons/icons/uil-github"
import LinkedIN from "@iconscout/react-unicons/icons/uil-linkedin"
import { ThemeContext } from "../../Context";
import { useContext } from "react";
import Reveal from 'react-reveal/Reveal';



export const Footer = () => {
  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;
  return (
    

      <div className="footer">
        <div className="icons">
          <a href="https://www.instagram.com/_jaleel_ahmed_">
            <Insta color='white' size='3rem' className='icons1' />
          </a>
          <a href="https://www.facebook.com/jaleel.mohd.3954">
            <Facebook color='white' size='3rem' className='icons1' />
          </a>
          <a href="https://github.com/jaleel-cloud">
            <Github color='white' size='3rem' className='icons1' />
          </a>
          <a href="https://www.linkedin.com/in/jaleel-mohd-55b59315b/">
            <LinkedIN color='white' size='3rem' className='icons1' />
          </a>

        </div>
      </div>
      
    

  )
}
