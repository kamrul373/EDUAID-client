import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCloudDownloadAlt } from "react-icons/fa";
import "./Details.css";
const Details = () => {
    const details = useLoaderData();
    const { id, title, img, price, info, instructor, summary, category } = details;
    console.log(details);
    return (
        <div className='course-details'>
            {/* course header */}
            <div className="course-intro">
                <div className="title d-lg-flex align-items-center">
                    <h2>{title}</h2>
                    <button className='ms-lg-3 badge text-bg-danger'>
                        <span className='me-2'>Download Details</span>
                        <FaCloudDownloadAlt></FaCloudDownloadAlt>
                    </button>
                </div>
                <p className='fs-5 mt-3'>{summary}</p>
                <div className='course-heighlight'>
                    <span className='mt-4 me-3 badge text-bg-danger'>{info.course_type} Sesion</span>
                    <span className='mt-4 me-3 badge text-bg-success'> {info.lesson} Lesson</span>

                    <span className='mt-4 me-3 badge text-bg-success'>Duraton : {info.duration}</span>
                    <span className='mt-4 me-3 badge text-bg-success'>Enrolled : {info.enrolled_students}</span>
                </div>
            </div>
            {/* course content details */}
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="thumb mt-3">
                            <img src={img} alt={title} />
                        </div>
                        <div className="summary mt-4">
                            <h3>Course Summary</h3>
                            <p>{summary}</p>
                        </div>
                        <div className="description">
                            <h3>Description</h3>
                            <p>{info.description}</p>
                        </div>
                        {/* Checkout button */}
                        <div className="checkout text-center py-2">
                            <Link>
                                <button className='btn btn-success btn-lg '>Get premium access</button>
                            </Link>
                        </div>
                        {/* autor */}
                        <div className="author py-4">
                            <h4>Instructor Info</h4>
                            <div className="author-info d-lg-flex align-items-center">
                                <img src={instructor.avatar} alt={instructor.name} />
                                <div className="bio ms-3">
                                    <h5>{instructor.name}</h5>
                                    <p>{instructor.about}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;