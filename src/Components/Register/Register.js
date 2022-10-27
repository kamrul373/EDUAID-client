import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContextProvider';

const Register = () => {
    // states
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState(null);

    // auth context
    const { createUser, updateUserProfile } = useContext(AuthContext);

    // form submit event handler
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        // taking values from user submission
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // if no error then user creation proceed
        if (!error) {
            createUser(email, password)
                .then(response => {
                    // updating profile
                    const userInfo = {
                        displayName: name, photoURL: photoURL
                    }
                    updateUserProfile(userInfo)
                        .then(() => { })
                        .catch(error => console.log(error));
                    toast.success('Successfully Registered');

                })
                .catch(error => console.error(error));
        }

    }
    const handlePassword = (e) => {
        const password = e.target.value;
        if (password.length < 6) {
            return setError("Password should contain 6 charecter")
        }
        else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            return setError("Password should contain on special charecter");

        } else {
            return setError(null);
        }

    }
    const handleChecked = (e) => {
        const checkbox = e.target.checked;
        setChecked(checkbox)
    }
    return (
        <div className='container mt-3'>
            <div className="row">
                <Form onSubmit={handleSubmit} className="col-6 mx-auto bg-light p-4" style={{ textAlign: "left" }}>
                    <h2 className='text-center fst-italic'>Register</h2>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name="name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicURL">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="url" placeholder="Enter photo url" name="photoURL" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onBlur={handlePassword} required />
                    </Form.Group>
                    <Form.Text className="text-danger">
                        {
                            error && error
                        }
                    </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I accept all terms and conditions of EDUAID" onClick={handleChecked} />
                    </Form.Group>
                    <div className='text-center'>
                        <Button variant="success" type="submit" disabled={!checked} className="w-50">
                            Register
                        </Button>
                    </div>
                </Form>
                <div>
                    <p className='fw-bold'>Do you already have an account ? <Link className='text-decoration-none text-success' to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;