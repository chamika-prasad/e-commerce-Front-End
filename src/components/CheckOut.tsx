import React from 'react'
import './CheckOut.css';

export default function CheckOut() {
  return (
    <div>
        <div className='checkout'>
        <div className="container p-0 wrapbox">
        <div className="card px-4 checkoutbox">
            <p className="h8 py-3 details">Payment Details</p>
            <div className="row gx-3">
                <div className="col-12">
                    <div className="d-flex flex-column">
                        <p className="text mb-1 paragraph words">Person Name</p>
                        <input className="form-control mb-3 inputfied" type="text" placeholder="Name" value="Barry Allen"/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="d-flex flex-column">
                        <p className="text mb-1 paragraph words">Card Number</p>
                        <input className="form-control mb-3 inputfied" type="text" placeholder="1234 5678 1234 5678"/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex flex-column">
                        <p className="text mb-1 paragraph words">Expiry</p>
                        <input className="form-control mb-3 inputfied" type="text" placeholder="MM/YYYY"/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex flex-column">
                        <p className="text mb-1 paragraph words">CVV/CVC</p>
                        <input className="form-control mb-3 pt-2 inputfied" type="password" placeholder="***"/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="btn btn-primary mb-3 payment">
                        <span className="ps-3">Pay $243</span>
                        <span className="fas fa-arrow-right arrow"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}
