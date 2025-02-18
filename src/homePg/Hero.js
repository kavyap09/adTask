import React from 'react';
import "../homePg/homestyle.css";
function Hero() {
    return ( 
      <>
      <div className="container  text-center p-4" >
     <div className='col-8 m-4 m-auto mt-4' >
     <button className="btn btn-dark shining-btn" style={{fontSize:'16px',padding:'12px'}}>
     
      TRANSFORM YOUR DIGITAL PRESENCE WITH AI AGENTS</button>
    <h1 className="head text-center mt-4">adTask.ai</h1>
    <p>Stop struggling with Marketing decisions .Our AI assistant analyzes your business, creates personalized strategies, and helps you execute them- all in real-time</p>
    <button className="btn btn-dark btn-md rounded-pill mx-3 freebtn" style={{backgroundColor:"#43698f",height:"45px"}}>Start a free trial</button>
      <p style={{fontSize:"10px",color:"white",opacity:"0.7"}} className='mt-3'>Try AdTask AI free for 30 days</p>
     </div>
     </div>
       </>
     );
}

export default Hero;