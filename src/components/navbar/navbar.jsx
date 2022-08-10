import React from "react";
import "./navbar.css"
import { Toggle } from "../toggle/toggle";
import {Link} from "react-scroll"
import { ThemeContext } from "../../Context";
import { useContext } from "react";
import "./nav.js"



export const Navbar = () => {
    
    const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Jaleel</div>
                <Toggle className='toggle'/>
                
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul id="ul">
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass' className="link">
                        <li className="links">Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                        <li className="links" >Services</li>
                        </Link>
                        <Link spy={true} to='Education' smooth={true} activeClass='activeClass'>
                        <li className="links" >Education</li>
                        </Link>
                        <Link spy={true} to='Projects' smooth={true} activeClass='activeClass'>
                        <li className="links">Projects</li>
                        </Link>
                    </ul>
                    </div>
                    <Link  spy={true} to='contact' smooth={true} activeClass='activeClass'>
                    <button className="button n-button">
                        Contact 
                    </button>
                    </Link>
                    
                
            </div>
        </div>
    )
    
}
