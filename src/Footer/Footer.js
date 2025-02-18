import React from 'react';
import Fleft from './Fleft';
import Fright from './Fright';

function Footer() {
    return (
        <div className="container mt-4">
            <div className="row align-items-center"> 
                <div className="col-md-5 d-flex justify-content-start">
                    <Fleft />
                </div>
                <div className="col-md-5 d-flex justify-content-end">
                    <Fright />
                </div>
            </div>
            <div className="text-center mt-3" style={{color:'grey'}}>
                All rights reserved <i className="fa-regular fa-copyright" style={{color:'grey'}}></i> 2025 adTask
            </div>
        </div>
    );
}

export default Footer;


