import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import RightSideBar from '../Shared/RightSideBar/RightSideBar';
import SingleCourse from '../SingleCourse/SingleCourse';
import Loading from '../Shared/Loading/Loading';

const Courses = () => {
    // loading data
    const courses = useLoaderData();
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div className='courses px-lg-4 p-2'>
            <div className="container-fluid my-lg-4">
                <div className="row flex-column-reverse flex-md-row course-row">
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
                    <div className="col-md-3 col-12 mt-md-3 ">
                        <RightSideBar></RightSideBar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;