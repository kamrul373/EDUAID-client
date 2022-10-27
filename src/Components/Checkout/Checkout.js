import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Checkout = () => {
    // loading data
    const courseData = useLoaderData();
    const { title, img, price, instructor } = courseData;
    // navigation hooks
    const navigate = useNavigate();
    // order confirmation event handler
    const handleCheckout = (e) => {
        navigate("/order-confirmed");
    }
    return (
        <div className='mt-3 checkout'>
            <h2>Checkout</h2>
            <div className='container mt-3'>
                <div className="row">
                    {/* dynamically loading ordered course data */}
                    <div className="card mb-3 col-12 col-lg-9" style={{ textAlign: "left" }} >
                        <div className="row p-3">
                            <div className="col-md-4">
                                <img src={img} className="img-fluid rounded-start" alt={title} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p>By : {instructor.name} </p>
                                    <p className="card-text fw-bold text-success fs-3">${price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* customer order form */}
                    <form onSubmit={handleCheckout} className="col-lg-3 col-12 text-center">
                        <div className="col-auto mb-2">
                            <label htmlFor="staticfname" className="visually-hidden">First Name</label>
                            <input type="text" className="form-control" id="staticfname" placeholder='First Name' required />
                        </div>
                        <div className="col-auto mb-2">
                            <label htmlFor="staticlname" className="visually-hidden">Last Name</label>
                            <input type="text" className="form-control" id="staticlname" placeholder='Last Name' required />
                        </div>
                        <div className="col-auto mb-2">
                            <label htmlFor="staticEmail" className="visually-hidden">Email</label>
                            <input type="text" className="form-control" id="staticEmail" placeholder='Email' required />
                        </div>
                        <div className="col-auto mb-2">
                            <label htmlFor="staticPhone" className="visually-hidden">Phone Number</label>
                            <input type="text" className="form-control" id="staticPhone" placeholder='Phone Number' required />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-success w-100">Confirm Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;