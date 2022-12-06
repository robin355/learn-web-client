import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'
import { FaUserAlt } from "react-icons/fa";
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-toastify';
const Header = () => {
    const { user, Logout } = useContext(AuthContext)
    let active = {
        textDecoration: "underline",
    };
    const handleLogout = () => {
        Logout()
            .then(() => { toast.success('Now,Logout Accound') })
            .catch(e => console.log(e))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to='/'>
                        <img
                            alt=""
                            src="https://cdn.vectorstock.com/i/1000x1000/72/15/child-home-learning-logo-design-learn-online-logo-vector-30927215.webp"
                            width="30"
                            height="30"
                            className="d-inline-block circle"
                        />{' '}
                        Learn Web
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <NavLink style={({ isActive }) =>
                                isActive ? active : undefined} className='menu ' to="/courses">Courses</NavLink>
                            <NavLink style={({ isActive }) =>
                                isActive ? active : undefined} className='menu ' to="/faq">FAQ</NavLink>
                            <NavLink style={({ isActive }) =>
                                isActive ? active : undefined} className='menu ' to="/blogs">Blogs</NavLink>
                            <label class="switch ms-5 mt-2">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                            {user?.photoURL ?
                                <Image title={user?.displayName}
                                    roundedCircle
                                    className='ms-5 me-3'
                                    src={user.photoURL}
                                    style={{ height: '30px' }}
                                >
                                </Image> :
                                <FaUserAlt />
                            }

                            {
                                user?.uid ?
                                    <>
                                        <button variant="outline-success" onClick={handleLogout}>Logout</button>
                                    </> :
                                    <>
                                        <NavLink style={({ isActive }) =>
                                            isActive ? active : undefined} className='menu ' to="/login">Login</NavLink>
                                    </>
                            }

                        </Nav>
                        <Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;