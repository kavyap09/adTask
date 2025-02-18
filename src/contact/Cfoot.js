// import React from 'react';
// function Cfoot() {
//     return (  
//         <>
//         <h1 className='text-muted text-center mt-4 mb-4'  style={{fontSize:'100px'}}>adTask.ai</h1>
//         <div className='col m-auto text-center'>
//    <h2 style={{fontSize:"45px"}}>Are you ready to boost</h2>
//    <h2 style={{color:"#43698f",fontSize:"42px"}}>
//     your Digital Presence?</h2>
//    <button className='btn btn-dark rounded-pill m-4 p-1.5' style={{backgroundColor:'#43698f'}}>Start Free Trail</button>
//    <br/>
//    <button className='btn m-4 rounded-pill p-3' style={{border:'1px solid #43698f',color:'white'}}>Schedule a Call</button>
//     <hr style={{color:"#43698f",fontWeight:'bold'}}></hr>
//    </div>
//         </>
//     );
// }

// export default Cfoot;
import React from 'react';

function Cfoot() {
    return (  
        <>
        <h1 className='text-muted text-center mt-4 mb-4' style={{ fontSize: '100px' }}>adTask.ai</h1>
        
        <div className='col m-auto text-center'>
            <h2 style={{ fontSize: "45px" }}>Are you ready to boost</h2>
            <h2 style={{ color: "#43698f", fontSize: "42px" }}>
                your Digital Presence?
            </h2>

            <div className=" mt-4">
                <button 
                    className='btn btn-dark rounded-pill p-3' 
                    style={{ backgroundColor: '#43698f',  border: "none",width:'150px'}}
                >
                    Start Free Trial
                </button>
                </div>
                <div className='mt-3'> 
                <button 
                    className='btn rounded-pill p-3 ' 
                    style={{ border: '2px solid #43698f', color: 'white',width:'150px'}}
                >
                    Schedule a Call
                </button>
            </div>

            <hr style={{ color: "#43698f", fontWeight: 'bold' }} />
        </div>
        </>
    );
}

export default Cfoot;
