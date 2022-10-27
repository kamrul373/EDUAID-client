import React, { useContext } from 'react';
import { Button, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/img/logo.png";
import { AuthContext } from '../../../context/AuthContextProvider';
import "./Header.css";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut().then(() => { }).catch(error => console.log(error))
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
                                className={`text-decoration-none me-4  ${({ isActive }) => isActive && "active"} `} to="/blogs">Blogs</NavLink>
                            {
                                user ?
                                    <>
                                        <Link onClick={handleLogOut} className="text-decoration-none me-3 badge text-bg-success logout">Log Out</Link>
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

                                    </> :
                                    <>
                                        <NavLink
                                            className={`text-decoration-none me-4 ${({ isActive }) => isActive && "active"} `} to="/login">Login</NavLink>
                                        <NavLink
                                            className={`text-decoration-none me-4 ${({ isActive }) => isActive && "active"} `} to="/register">Regsiter</NavLink>
                                    </>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;