import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import handleBtn from '../../../utility/handleActiveState';
import "./CourseType.css";

const CourseType = () => {
    const [types, setTypes] = useState([]);
    useEffect(() => {
        fetch("https://eduaid-server-side.vercel.app/course-type")
            .then(response => response.json())
            .then(types => setTypes(types));
    }, []);

    return (
        <div className='mt-2'>
            <h2>Course Type</h2>
            {
                types.map((type, idx) =>

                    <Link
                        key={idx}
                        to={`/courses/type/${type.course_type}`}
                        className={`text-decoration-none  ${({ isActive }) => isActive && "active"} `}>
                        <button onClick={handleBtn} className='btn btn-outline-success w-100 my-2'>{type.course_type}</button>
                    </Link>

                )
            }
        </div>
    );
};

export default CourseType;