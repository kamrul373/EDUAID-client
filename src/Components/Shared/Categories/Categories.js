import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CategoryContext } from '../../../App';
import handleBtn from '../../../utility/handleActiveState';

const Categories = () => {
    const categories = useContext(CategoryContext)
    return (
        <div className='mt-2'>
            <h2>Categories</h2>
            {
                categories.map(category => <NavLink
                    to={`/courses/${category.category_id}`}
                    key={category.category_id}
                    className={`text-decoration-none text-dark`}
                >
                    <button onClick={handleBtn} className='btn btn-outline-success w-100 my-2'>{category.category_name}</button>
                </NavLink>)
            }
        </div>
    );
};

export default Categories;