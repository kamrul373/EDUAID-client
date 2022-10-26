import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideBar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(response => response.json())
            .then(categories => setCategories(categories));
    }, []);
    return (
        <div className='border p-2'>
            <h2>Categories</h2>
            {
                categories.map(category => <Link
                    to={`/courses/${category.category_id}`}
                    key={category.category_id}
                    className="text-decoration-none text-dark"
                >
                    <button className='btn btn-light w-100 my-2'>{category.category_name}</button>
                </Link>)
            }
        </div>
    );
};

export default RightSideBar;