import React from 'react'
import "./intro.css"
import Github from '../../img/Github1.png';
import Instagram from '../../img/instagram.png';
import LinkedIn from '../../img/linkedin.png';
import Images from "../../img/img.png"
import { ThemeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-scroll"
import Slide from 'react-reveal/Slide';

export const Intro = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode
    return (
        <div className="intro">
            <Slide left>
                <div className="i-left">
                    <div className="i-name">
                        <span style={{ color: darkmode ? 'white' : '' }}>Hey! I Am</span>
                        <span>Jaleel Ahmed Mohammad</span>
                        <span style={{ color: darkmode ? 'white' : '' }}>A Full Stack Web Developer</span>
                        <span style={{ color: darkmode ? 'white' : '' }}>MERN Stack</span>
                    </div>

                    <Link spy={true} to='contact' activeClass='activeclass' smooth={true}>
                        <button className="button i-button">  Hire me</button>
                    </Link>
                    <div className="i-icons">


                        <img src="../../img/chatApp.png" alt="" />
                        <a href="https://github.com/jaleel-cloud">
                            <img src={Github} alt="" style={{ borderRadius: darkmode ? '50%' : "" }} />
                        </a>
                        <a href="https://www.instagram.com/_jaleel_ahmed_">
                            <img src={Instagram} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/jaleel-mohd-55b59315b/">
                            <img src={LinkedIn} alt="" />
                        </a>

                    </div>


                </div>
            </Slide>
            <Slide right>
            <div className="i-right">
                <img src={Images} alt="failed" width={"200px"} height={"200px"} />
            </div>
            </Slide>
            
        </div >
    )
}
