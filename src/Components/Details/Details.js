import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaCloudDownloadAlt } from "react-icons/fa";
const Details = () => {
    const details = useLoaderData();
    const { id, title, img, price, info, instructor, summary, category } = details;
    console.log(details);
    return (
        <div>
            <Card className="text-center">
                <Card.Header>
                    <h2>{title} <span className='ms-3 text-success'><FaCloudDownloadAlt></FaCloudDownloadAlt></span></h2>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default Details;