import React from 'react'
import "./Education.css"
import { ThemeContext } from "../../Context";
import { useContext } from "react";
import Zoom from 'react-reveal/Zoom';


export const Education = () => {
  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;
  return (
    <>
    <Zoom left cascade>

    <div className="Education" id='Education'>
{/*  left div */}
<div className="left-Edu">
<h1 style={{color:darkmode?'white' :''}}>Pre-university</h1>
<h2>School:</h2>
<p style={{color:darkmode?'white' :''}}>I have completed my Schooling from G.M.R Chinmaya Vidyalaya.</p>

<p style={{color:darkmode?'white' :''}}>I have secured 9.0/10.0 CGPA</p>
<p style={{color:darkmode?'white' :''}}> I have won many prizes including in sports and arts</p>
<h2>Intermediate:</h2>
<p style={{color:darkmode?'white' :''}}>I have completed my Intermediate from Chaitanya Junior college</p>

<p style={{color:darkmode?'white' :''}}>I have secured 85.5/100 </p>


</div>
{/*  middle div */}
<div className="middle-Edu"> 
<h1 style={{color:darkmode?'white' :''}}>Bachelors</h1>
<h2>Engineering : </h2>
<p style={{color:darkmode?'white' :''}}>I am Pursuing my Engineering from LORDS Institute of Engineering and Technology</p>
<p style={{color:darkmode?'white' :''}}>My bachelors is Affliated to Osmania Unviersity</p>
<p style={{color:darkmode?'white' :''}}>Good Computer Fundamentals Kowledge</p>








</div>
{/* Right div */}
<div className="right-Edu">
    <h1 style={{color:darkmode?'white' :''}}>Courses</h1>
    <h2>Full Stack Web Development :</h2>
    <p style={{color:darkmode?'white' :''}}>I have completed full stack development from Udemy</p>
    <p style={{color:darkmode?'white' :''}}>i am a MERN Stack Developer</p>
    <h2>Python :</h2>
    <p style={{color:darkmode?'white' :''}}> Completed Python for Data science from Cognitive Classes</p>
    <p style={{color:darkmode?'white' :''}}>Powered by IBM</p>
</div>
</div>
</Zoom>
</>
  )

}
