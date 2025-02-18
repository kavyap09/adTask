// import React from 'react';
// import "../homePg/homestyle.css";
// function Navbar() {
//     return ( 
//        <>
//       <div className="container mt-4 " >
//         <nav  className="navbar navbar-expand-lg  d-flex justify-content-between align-items-center p-2" style={{justifyContent:'space-around',border:"1px solid white",borderRadius:'15px'}}>
//         <a className="navbar-brand mx-2" href="#"style={{color:"white"}} >adTask</a>
//         <ul className="navbar-nav d-flex flex-row gap-4">
//                     <li className="nav-item " >
//                         <a className=" nav-link dropdown-toggle" href="#" style={{color:"white"}}>Product</a>
//                     </li>
//                     <li className="nav-item " >
//                         <a className=" nav-link dropdown-toggle" href="#" style={{color:"white"}}>Tools</a>
//                     </li>
                  
//                     <li className="nav-item" >
//                         <a className="nav-link" href="#" style={{color:"white"}}>Contact Us<span className="sr-only">(current)</span></a>
//                     </li>
//                 </ul>
//                 <button className="btn btn-dark m-2 rounded-pill" style={{border:'2px solid #43698f',width:'120px'}}>Login</button>
//                 <button className="btn btn-dark btn-md rounded-pill mx-3">Schedule a Call</button>
//       </nav>
//      </div>
//        </>
//      );
// }

// export default Navbar;
import React from 'react';
import "../homePg/homestyle.css";

function Navbar() {
    return ( 
       <>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg p-2 d-flex align-items-center"
             style={{
                 border: "1px solid #43698f",
                 borderRadius: '15px'
             }}>
        
          <a className="navbar-brand" href="#" style={{ color: "white", marginLeft: "10px" }}>adTask</a>
          
          {/* Centered Nav Links */}
          <ul className="navbar-nav mx-auto d-flex flex-row gap-4">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle animated-arrow" href="#" style={{ color: "white" }}>
                Product
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle animated-arrow" href="#" style={{ color: "white" }}>
                Tools
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "white" }}>Contact Us</a>
            </li>
          </ul>

          {/* Buttons - Aligned to the Right */}
          <div className="ms-auto d-flex">
            <button className="btn btn-dark rounded-pill me-2" 
                    style={{ border: '2px solid #43698f', width: '120px' }}>
              Login
            </button>
            <button className="btn btn-dark rounded-pill" style={{backgroundColor:'#708191'}}>
              Schedule a Call
            </button>
          </div>

        </nav>
      </div>
       </>
    );
}

export default Navbar;


