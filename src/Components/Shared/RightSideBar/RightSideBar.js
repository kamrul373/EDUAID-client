import React from 'react';
import Categories from '../Categories/Categories';
import CourseType from '../CourseType/CourseType';

const RightSideBar = () => {

    return (
        <div className='border p-2 mt-5'>
            <CourseType></CourseType>
            <Categories></Categories>
        </div>
    );
};

export default RightSideBar;