import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Banner from '../Shared/Banner/Banner';
import HomeCatDesigner from '../Shared/HomeCatDesigner/HomeCatDesigner';


const Home = () => {
    let categories = useContext(CategoryContext);
    categories = categories.filter(category => category.category_id !== 10);
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
        </div>
    );
};

export default Home;