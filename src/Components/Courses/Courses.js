import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RightSideBar from '../Shared/RightSideBar/RightSideBar';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='courses px-lg-4 p-2'>
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-md-9 col-12 mx-auto">
                        <h2>Our Available Courses</h2>

                        <div className="row row-cols-1 row-cols-lg-2 gy-lg-4 ">

                            {
                                courses.map(course => <SingleCourse
                                    key={course.id}
                                    course={course}
                                ></SingleCourse>)
                            }
                        </div>
                    </div>
                    <div className="col-md-3 d-none d-lg-block">
                        <RightSideBar></RightSideBar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;