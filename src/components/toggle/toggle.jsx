import React from 'react'
import "./toggle.css"
import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { ThemeContext } from '../../Context'
import { useContext } from 'react'

export const Toggle = () => {
    const theme= useContext(ThemeContext);
    const darkmode= theme.state.darkmode;
    const handleClick =()=>{
        theme.dispatch({type:'toggle'})
    }
  return (
    <div className="toggle" onClick={handleClick}>
<Sun/>
<Moon/>
<div className="t-button" style={darkmode? {left:'2px'}:{right:"2px"}}></div>
    </div>
  )
}
