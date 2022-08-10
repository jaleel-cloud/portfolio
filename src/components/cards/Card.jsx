import React from 'react'
import "./Card.css"
import { ThemeContext } from "../../Context";
import { useContext } from "react";

export const Card = ({emoji,heading,detail}) => {
  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="card"  style={{background:darkmode?'white':'',border:darkmode?'4px solid var(--light)':""}}>
        <img src={emoji} alt="" />
        <span  style={{color:darkmode?'black' :''}}>{heading}</span>
       <span style={{color:darkmode?'black' :''}}>{detail}</span>
       <a href="https://www.w3schools.com/">
       <button className="c-button">learn more</button>
       </a>

    </div>
  )
}
