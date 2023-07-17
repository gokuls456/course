import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';



const NavbarComponent = () => {
    return (
        // <div className="navbar">
        //     <nav className='navbar-wrapper'>
        //     <div className="logo">
        //         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDdJpvpgr0ex8D_llrc9QSKmyUR5q8Zpd5EQ&usqp=CAU" alt="Logo" />
        //     </div>
        //     <div className="left-links">
        //         <Link to="/">Program</Link>
        //         <Link to="/hire">Hire from us</Link>
        //         <Link to="/blog">Blog</Link>
        //         <Link to="/internship">Internship</Link>
        //         <Link to="/internship" className='orange-round-button'>Get Started</Link>
        //     </div>
        // </nav>
        // </div>

        <Navbar expand="lg" className="light">
            <Container>
                <Navbar.Brand href="/" className="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDdJpvpgr0ex8D_llrc9QSKmyUR5q8Zpd5EQ&usqp=CAU" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end left-links' style={{ textAlign: "center", backgroundColor: "#ffffff"}}>
                    <Nav>
                        <NavLink to="/">Program</NavLink>
                        <NavLink to="/hire">Hire from us</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        <NavLink to="/internship">Internship</NavLink>
                        <Button className='orange-round-button'>Internship</Button>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
