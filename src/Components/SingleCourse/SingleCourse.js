import React from 'react';
import { Link } from 'react-router-dom';
import "./SingleCourse.css";

const SingleCourse = ({ course }) => {
    const { id, title, img, price, info, instructor, summary, category } = course;
    return (
        <div className="col single-course rounded ">
            <div className="card p-lg-4 my-3 single-course-content text-start">
                <div className="course-thumb">
                    <img src={img} alt={title} />
                </div>
                <div className="instructor">
                    <img src={instructor.avatar} alt={instructor.name} />
                    <span className='inline-block p-2'>{instructor.name}</span>
                </div>
                <div className="card-body py-0" id="course-card-body">
                    <span className='badge text-bg-success mb-2'>{category}</span>
                    <h5 className="card-title mb-3">{title}</h5>
                    <span className="card-text">{summary}</span>
                </div>
                <div className="course-info py-3">
                    <h2>${price}</h2>
                    <Link to={`/course-details/${id}`}>
                        <button className='explore-course-btn'>Course Details</button>
                    </Link>
                </div>
                <div className="course-type">
                    <span>{info.course_type}</span>
                </div>
            </div>
        </div>
    );
}
export default SingleCourse;