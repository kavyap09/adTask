import React from 'react';
import "../mediaPg/mediastyle.css"
function Company() {
    return ( 
       
        <div className='container'>
        <div className='row'>
            <div className='col company-img'>
              <img src="/media/company.png" style={{width:'100%'}} />
            </div>
        </div>
        <div className="row m-3">
            <div className="col">
                <p className="m-3 p-2 text-center">Adtask AI works with:</p>
               <div className="parent">
                <div className="comchild  m-3"> 
               <div className="comlogo" >
               <i class="fa-brands fa-google"></i>
               </div>
                <p>Google Ads</p>
                </div>
                <div className="comchild m-3" > 
                <div className="comlogo p-2"  >
                <i class="fa-brands fa-tiktok"></i></div>
                <p>TikTok</p>
                </div>
                <div className="comchild m-3" > 
                <div className="comlogo" >
                <i class="fa-brands fa-meta"></i></div>
                <p>Meta</p>
                </div>
                <div className="comchild m-3" > 
                <div className="comlogo" >
                <i class="fa-brands fa-linkedin"></i></div>
             
                <p>Linkedin</p>
                </div>
                <div className="comchild m-3" > 
                <div className="comlogo" >
                <i class="fa-brands fa-amazon"></i></div>
                
                <p>Amazon</p>
                </div>
                <div className="comchild m-3" > 
                <div className="comlogo" >
                <i class="fa-brands fa-x-twitter"></i></div>
               
                <p>X-twitter</p>
                </div>
               </div>

            </div>
        </div>
    </div>
     );
}

export default Company;
