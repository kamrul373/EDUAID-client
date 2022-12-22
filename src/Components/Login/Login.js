import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../context/AuthContextProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    // error state
    const [error, setError] = useState(null);
    // auth context
    const { login, loginWithProvider } = useContext(AuthContext);
    // navigate 
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // login event handler
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(response => {
                navigate(from, { replace: true });
            }).catch(err => {
                if (err.message.includes("auth/user-not-found")) {
                    setError("User not found !")

                }
                if (err.message.includes("auth/wrong-password")) {
                    setError("Email password mismatch")

                }
                if (err.message.includes("auth/too-many-requests")) {
                    setError("Please try later or reset your password!")
                }
            })
        console.log(email, password);
    }
    // login with google
    const handleGoogleProvider = () => {
        const provider = new GoogleAuthProvider()
        loginWithProvider(provider)
            .then(response => {
                navigate(from, { replace: true })
            }).catch(err => setError(err.message))
    }
    // login with github
    const handleGithubProvider = () => {
        const provider = new GithubAuthProvider()
        loginWithProvider(provider)
            .then(response => {
                navigate(from, { replace: true })
            }).catch(err => setError(err.message))
    }
    return (
        <div className='container mt-3'>
            <div className="row">
                <Form onSubmit={handleSubmit} className="col-lg-6 mx-auto bg-light p-4" style={{ textAlign: "left" }}>
                    <h2 className='text-center fst-italic'>Login</h2>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" required />
                    </Form.Group>
                    {/* conditional error formating */}
                    <Form.Text className="text-danger">
                        <p className='text-center mt-2'>
                            {
                                error && error
                            }
                        </p>
                    </Form.Text>
                    <div className='text-center'>
                        <Button variant="success" type="submit" className="w-50">
                            Login
                        </Button>
                    </div>
                </Form>
                <div>
                    <p>Or Login with</p>
                    <p>
                        <button onClick={handleGoogleProvider} className='btn btn-outline-dark me-3'>
                            <span className='me-2'>Google</span>
                            <FaGoogle></FaGoogle>
                        </button>
                        <button onClick={handleGithubProvider} className='btn btn-outline-dark'>
                            <span className='me-2'>Github</span>
                            <FaGithub></FaGithub>
                        </button>
                    </p>
                </div>
                <div>
                    <p className='fw-bold'>Dont have an account? <Link className='text-decoration-none text-success' to="/register">Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;