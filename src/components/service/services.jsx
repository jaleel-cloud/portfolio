import React from 'react'
import "./services.css"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import HeartEmoji from "../../img/heartemoji.png"
import { Card } from '../cards/Card'
import Resume from './resume.pdf'
import { ThemeContext } from "../../Context";
import { useContext } from "react";
import Roll from 'react-reveal/Roll';
import Spin from 'react-reveal/Spin';
import Slide from 'react-reveal/Slide';


export const Services = () => {
  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode
  return (
    <div className="services" id='Services'>
      {/* left side */}
      <Slide left>
      <div className="awesome">
        <span style={{color:darkmode?'white':''}}>My Awesome</span>
        <span>Services</span>

        <span style={{color:darkmode?'white':''}}>Full stack development deals with the ideology of developing both frontend and backend of an application.Working with different libraries</span>
        <span style={{color:darkmode?'white':''}}>and different frameworks that will make awesome designs and animations.</span>
        <span style={{color:darkmode?'white':''}} > I use React Reveal and react spring for Awesome animations.
        </span>
        <span style={{color:darkmode?'white':''}}> I use Custom Css that will make new and beautiful design that will enhance the UserInterface</span>
         <span style={{color:darkmode?'white':''}}>Also I use bootstrap and Tailwind css as the frontend framework for InBuild functions</span>
         
         <span style={{color:darkmode?'white':''}}>UserExperience plays an important role in once navigation through the webPage</span>
        <span style={{color:darkmode?'white':''}}>I use Node.Js as the runtime environment for my Javascript backened which is more preferrable</span>
        <span style={{color:darkmode?'white':''}}>and supportive by most of the web application. </span>
        <span style={{color:darkmode?'white':''}}>I use MongoDB as database as it uses the BSON which is easily understandable and usuable</span>
        <a href={Resume} download><button className="button s-button" >Download CV</button></a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>

      </div>
      </Slide>
      {/* right side */}
      <Slide right>
      <div className="cards" >
        <div style={{ left: '12rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={"Css,React,Bootstrap,Tailwind,React-reveal,React-spring"}


          />
        </div>
        <div style={{ left: '-4rem', top: '10rem' }}>
          <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={"Html,Css,Js,React.js,Node.js,MongoDb"}
            

          />
        </div>
        <div style={{ left: '12rem', top: '18rem' }}>
          <Card
            emoji={Humble}
            heading={'Programming'}
            detail={"C,Python,Javascript,java"}


          />
        </div>
      </div>
      </Slide>
    </div>
  )
}
