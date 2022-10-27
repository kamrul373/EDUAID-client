import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub, FaTwitter, FaStackOverflow } from "react-icons/fa";
import logo from "../../../assets/img/logo.png";
import { Image } from 'react-bootstrap';
const Footer = () => {
    return (
        <div>
            <div className="mt-5">
                <footer className="bg-dark text-center text-white py-4">
                    <div className="container p-4 pb-0">
                        <p className='display-1'>EDUAID</p>
                        {/* scocial icons */}
                        <section className="mb-4">
                            <a className="btn btn-outline-light btn-floating m-1 me-2" href="#!" role="button"
                            ><FaGoogle></FaGoogle></a>

                            <a className="btn btn-outline-light btn-floating m-1 me-2" href="#!" role="button"
                            ><FaGithub></FaGithub></a>

                            <a className="btn btn-outline-light btn-floating m-1 me-2" href="#!" role="button"
                            ><FaTwitter></FaTwitter></a>

                            <a className="btn btn-outline-light btn-floating m-1 me-2" href="#!" role="button"
                            ><FaStackOverflow></FaStackOverflow></a>
                        </section>
                    </div>
                    {/* copyright */}
                    <div className="text-center p-3 copyright" >
                        <span className='me-2'>© 2020 Copyright:</span>
                        <Link className="text-white text-decoration-none " to="/">EDUAID</Link>
                    </div>
                </footer>
            </div >
        </div >
    );
};

export default Footer;