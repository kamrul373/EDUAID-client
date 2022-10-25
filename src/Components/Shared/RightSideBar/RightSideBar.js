import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideBar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(response => response.json())
            .then(categories => setCategories(categories));
    }, []);
    console.log(categories);
    return (
        <div>
            <h2>Course Categories</h2>
            {
                categories.map(category => <Link
                    to={`/category/${category.category_id}`}
                    key={category.category_id}
                    className="text-decoration-none text-dark"
                >{category.category_name}</Link>)
            }
        </div>
    );
};

export default RightSideBar;