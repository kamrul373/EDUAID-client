import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Banner from '../Shared/Banner/Banner';
import HomeCatDesigner from '../Shared/HomeCatDesigner/HomeCatDesigner';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';
import Contact from '../Contact/Contact';


const Home = () => {
    let categories = useContext(CategoryContext);
    categories = categories.filter(category => category.category_id !== 10);
    const [livecourse, setLiveCourse] = useState([]);
    useEffect(() => {
        fetch("https://eduaid-server-side.vercel.app/course-type/live")
            .then(res => res.json())
            .then(data => {
                const courses = data.slice(1, 4)
                setLiveCourse(courses)
            })
    }, [])
    return (
        <div>
            <Banner></Banner>
            <h2 className='my-4'>Top Course Category</h2>
            <div className='container'>
                <div className="row row-cols-1 row-cols-lg-3 gy-lg-4 text-center g-2 my-4">
                    {
                        categories.map(category => <HomeCatDesigner
                            key={category.category_id}
                            category={category}
                        ></HomeCatDesigner>)
                    }
                </div>
            </div>
            <div className='mx-auto px-lg-5 px-3' >
                <h2 className='my-5'>Exclusive Live Courses</h2>
                <div className='row row-cols-1 row-cols-lg-3 gy-lg-4 px-lg-5 px-3'>
                    {
                        livecourse.map(course => <SingleCourse
                            key={course._id}
                            course={course}
                        ></SingleCourse>)
                    }
                </div>

            </div>
            <Contact></Contact>
        </div>
    );
};

export default Home;