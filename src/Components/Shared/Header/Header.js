import React, { useContext, useState } from 'react';
import { Button, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from "../../../assets/img/logo.png";
import { AuthContext } from '../../../context/AuthContextProvider';
import "./Header.css";
import { BiSun, BiMoon } from "react-icons/bi";
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
        console.log(mode)
        if (mode === true) {
            document.boyd.style.backgroundColor = "black";
            document.body.style.color = "white";
        }

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
                                                    className="d-md-block d-none"
                                                />


                                            )}
                                        </OverlayTrigger>
                                        {/* for mobile devices */}
                                        <div className='text-center d-md-none d-block'>
                                            <Image src={user?.photoURL} alt={user?.displayName} style={{ width: "30px", height: "30px" }} roundedCircle />
                                            <span className='ms-2'>{user?.displayName}</span>
                                        </div>
                                        <Link onClick={handleLogOut} className="text-decoration-none mx-lg-3 my-2 my-lg-0 badge text-bg-success logout">Log Out</Link>
                                    </> :
                                    <>
                                        <NavLink
                                            className={`text-decoration-none me-4 ${({ isActive }) => isActive && "active"} `} to="/login">Login</NavLink>
                                    </>
                            }

                            {/* <Button onClick={handlemode} className="text-decoration-none badge rounded-pill bg-transparent text-black border-success "  >{!mode ? <BiSun className='fs-5'></BiSun> : <BiMoon className='fs-5'></BiMoon>}</Button> */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;