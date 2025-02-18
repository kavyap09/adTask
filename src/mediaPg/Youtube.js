import React from 'react';

function Youtube() {

    return ( 
       
        <div className='container m-auto p-5  ' >
        <div className='row m-auto' >
        {/* style={{border:'4px solid grey',borderRadius:"20px",height:'500px',width:'80%',backgroundColor:'black'}}
            <h1 style={{fontSize:'80px',color:'grey'}}>AdTask.ai</h1> */}
            <img src='/media/yt.png' alt="yt-img" 
            className='p-2' 
            style={{borderRadius:'20px',width:'70%',
            margin:'auto',border:'4px solid grey'}} />
        </div>
    </div>
     );
}

export default Youtube;