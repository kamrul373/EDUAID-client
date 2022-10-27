import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const FAQ = () => {
    return (
        <div className="container mt-4" >
            <h2>FAQ</h2>
            <div className="row">
                <div className="col-lg-10 mx-auto" style={{ textAlign: "justify" }}>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><p className="text-success fw-bold">What do EDUAID courses include?</p></Accordion.Header>
                            <Accordion.Body>
                                Each EDUAID course is created, owned and managed by the instructor(s). The foundation of each EDUAID course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <p className="text-success fw-bold">How do I access my enrolled course?
                                </p>
                            </Accordion.Header>
                            <Accordion.Body>
                                After you enroll in a course, you can access it by clicking on the course link you will receive in your confirmation email or <Link to="/login">Login</Link> to access your course on EDUAID.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <p className="text-success fw-bold">How can I pay for a course?
                                </p>
                            </Accordion.Header>
                            <Accordion.Body>
                                You can pay with your credit / debit card or event by Mobile banking (bkash/rocket) .
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default FAQ;