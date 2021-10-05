import React from 'react'
import "./Footer.css"

function Footer() {
    return (
     <div className="footer">
        <div className="container py-3">
                <div className="row">
                    <div className="col-md-6">
                        <p className="text text-capitalize">
                            copyright &copy; Olawale Otubu
                          {new Date().getFullYear()}
                            {" "}all rights reserved{""}
                        </p>
                    </div>
                      <div className="col-md=6  d-flex justify-content-between"></div> 
                </div>
            </div>
            </div>
    )
}

export default Footer
