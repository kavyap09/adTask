import React from 'react';
function Thead() {
    return ( 
        <>
        <div className="container">
            <div className='row'>
        <div className='col-2 m-auto'>
         <button className='btn btn-dark m-5 rounded-pill p-2' style={{backgroundColor:"#1f2021",color:"#d3dbe3",border:"1px solid #43698f"}}>Testinomals</button>
        </div>
</div>
<div className='col m-auto text-center'>
   <h2 style={{fontSize:"35px"}}>Trusted by</h2>
   <h2 style={{color:"#43698f",fontSize:"38px"}}>
    <hr></hr>satisfied clients</h2>
    <p>Discover how we've driven growth and innovation</p>
   </div>
        </div>
        </>
     );
}

export default Thead;