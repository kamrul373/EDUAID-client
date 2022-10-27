import React, { useContext, useState } from 'react';
import { Button, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from "../../../assets/img/logo.png";
import { AuthContext } from '../../../context/AuthContextProvider';
import "./Header.css";

const Header = () => {
    // toogle mode
    const [mode, setMode] = useState(false)
    // auth context
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    // logout event handler
    const handleLogOut = () => {
        logOut().then(() => { navigate("/login") })
            .catch(error => console.log(error))
    }
    // mode event handler
    const handlemode = () => {
        setMode(!mode);
    }
    return (
        <header className='main-menu'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar><Link to="/"><Image src={logo}></Image></Link></Navbar>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <NavLink
                                className={`text-decoration-none me-4 ${({ isActive }) => isActive && "active"} `} to="/home"
                            > Home</NavLink>

                            <NavLink
                                className={`text-decoration-none me-4  ${({ isActive }) => isActive && "active"} `}
                                to="/courses">Courses</NavLink>
                            <NavLink
                                className={`text-decoration-none me-4  ${({ isActive }) => isActive && "active"} `} to="/faq">FAQ</NavLink>
                            <NavLink
                                className={`text-decoration-none me-4  ${({ isActive }) => isActive && "active"} `} to="/blogs">Blog</NavLink>
                            {/* Conditional foramting */}
                            {
                                user ?
                                    <>
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="button-tooltip-2">{user?.displayName}</Tooltip>}
                                        >
                                            {({ ref, ...triggerHandler }) => (


                                                <Image
                                                    {...triggerHandler}
                                                    ref={ref}
                                                    roundedCircle
                                                    src={user?.photoURL}
                                                    style={{ width: "30px", height: "30px" }}
                                                    alt={user?.displayName}
                                                />


                                            )}
                                        </OverlayTrigger>
                                        <Link onClick={handleLogOut} className="text-decoration-none mx-lg-3 my-2 my-lg-0 badge text-bg-success logout">Log Out</Link>
                                    </> :
                                    <>
                                        <NavLink
                                            className={`text-decoration-none me-4 ${({ isActive }) => isActive && "active"} `} to="/login">Login</NavLink>
                                    </>
                            }

                            <Link onClick={handlemode} className={`text-decoration-none badge rounded-pill  ${mode ? "text-bg-dark " : "bg-white"} `}>{mode ? "Dark Mode" : "Light Mode"}</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;