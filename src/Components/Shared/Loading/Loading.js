import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100'>
            <button className='explore-course-btn'>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading</button>

        </div>
    );
};

export default Loading;