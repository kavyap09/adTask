import React from 'react';

function Fright() {
    return ( 
        <div className="container d-flex justify-content-end">
            <div className="text-center p-4 rounded" style={{width:'600px'}}>
                <div className="row">
                    <div className="col-6 my-3">
                        <h3>Utilities</h3>
                        <ul className="list-unstyled" >
                            <li style={{ color: "grey",fontSize:'18px'}}>Home</li>
                            <li style={{ color: "grey",fontSize:'18px'}}>Products</li>
                            <li style={{ color: "grey",fontSize:'18px'}}>Tools</li>
                            <li style={{ color: "grey",fontSize:'18px'}}>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-6 my-3">
                        <h3>Socials</h3>
                        <ul className="list-unstyled">
                            <li style={{ color: "grey",fontSize:'18px' }}>X</li>
                            <li style={{ color: "grey",fontSize:'18px' }}>LinkedIn</li>
                            <li style={{ color: "grey",fontSize:'18px' }}>Instagram</li>
                            <li style={{ color: "grey",fontSize:'18px' }}>Facebook</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fright;

