import React from 'react';
import Cinfo from './Cinfo';
import Cform from './Cform';
import Cfoot from './Cfoot';
function ContactPg() {
    return (
        <>
            <div className="container">
                {/* Center the button */}
                <div className="d-flex justify-content-center align-items-center my-5">
                    <button className="btn btn-dark rounded-pill" 
                        style={{
                            backgroundColor: "#1f2021",
                            color: "#d3dbe3",
                            border: "1px solid #43698f",
                            padding: "8px 30px",
                            fontSize: "15px"
                        }}>
                        Contact Us
                    </button>
                </div>

                <div className="row">
                    <div className="col-6" style={{ padding: '20px' }}>
                        <Cinfo />
                    </div>
                    <div className="col-6">
                        <Cform />
                    </div>
                </div>
            </div>
            <Cfoot/>
        </>
    );
}

export default ContactPg;
