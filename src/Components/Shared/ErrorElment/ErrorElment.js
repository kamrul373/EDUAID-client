import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const ErrorElment = () => {
    return (
        <div>
            <Header></Header>
            <div class="d-flex flex-column align-items-center justify-content-center vh-100 bg-dark text-white">
                <h1 class="display-1 fw-bold ">404 !</h1>
                <h3>Not Found</h3>
                <div className='mt-3'>
                    <Link to="/" className='btn btn-success'>Go to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorElment;