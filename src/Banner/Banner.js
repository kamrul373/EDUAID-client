import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css";

const Banner = () => {
    return (
        <div className='banner'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="banner-content mx-auto">
                            <p className='sub-heading'>OVER 15 COURSE AVAILABLE</p>
                            <h2>Upgrade your learning Skills & Upgrade your life</h2>
                            <p>Explore variety of quality courses and gain new skills</p>
                            <Link to="/courses">
                                <button className='explore-course-btn'>Our Courses</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;