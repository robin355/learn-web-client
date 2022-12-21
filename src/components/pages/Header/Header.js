import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import { FaUserAlt } from "react-icons/fa";
import './Header.css'
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-toastify';
const Header = () => {
    const { user, Logout } = useContext(AuthContext)

    const handleLogout = () => {
        Logout()
            .then(() => { toast.success('Now,Logout Accound') })
            .catch(e => console.log(e))
    }
    return (
        <div>
            <div className="navbar bg-neutral">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-white rounded-box w-52">
                            <li><Link to="/courses">Courses</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            {user?.photoURL ?
                                <Image title={user?.displayName}
                                    roundedCircle
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
                                        <li>
                                            <Link to="/login">Login</Link>
                                        </li>
                                    </>
                            }

                        </ul>
                    </div>
                    <Link className="text-white normal-case text-xl">Web Learn</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>

                        {
                            user?.uid ?
                                <>
                                    <li>
                                        <button variant="outline-success" onClick={handleLogout}>Logout</button>
                                    </li>
                                </> :
                                <>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                                </>
                        }


                    </ul>
                </div>

            </div>
            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
            </Navbar> */}
        </div>
    );
};

export default Header;