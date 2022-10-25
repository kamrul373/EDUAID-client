import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/img/logo.png";
import "./Header.css";

const Header = () => {
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
                            <NavLink
                                className={`text-decoration-none me-4 ${({ isActive }) => isActive && "active"} `} to="/login">Login</NavLink>
                            <NavLink
                                className={`text-decoration-none me-4 ${({ isActive }) => isActive && "active"} `} to="/register">Regsiter</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;