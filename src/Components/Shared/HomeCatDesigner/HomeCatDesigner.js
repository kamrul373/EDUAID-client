import React from 'react';
import { Link } from 'react-router-dom';
import "./HomeCatDesigner.css";

const HomeCatDesigner = ({ category }) => {
    return (
        <div className='col px-4 home-cat'>
            <Link className='text-decoration-none' to={`/courses/${category.category_id}`}>
                <div className='card bg-light home-cat-card'>
                    {
                        category.category_name
                    }
                </div>
            </Link>
        </div>
    );
};

export default HomeCatDesigner;