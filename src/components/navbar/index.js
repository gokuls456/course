import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
    const [expanded, setExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleNavbarToggle = () => {
        if (isMobile) {
            setExpanded(!expanded);
          }
    };

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 990);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <Navbar sticky="top" expand="lg" className="light" expanded={expanded}>
            <Container>
                <Navbar.Brand href="/" className="logo">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDdJpvpgr0ex8D_llrc9QSKmyUR5q8Zpd5EQ&usqp=CAU"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle} />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end left-links" style={{ textAlign: 'center', backgroundColor: '#ffffff' }}>
                    <Nav onClick={handleNavbarToggle}>
                        <NavLink exact to="/" activeClassName="active">
                            Program
                        </NavLink>
                        <NavLink to="/hire" activeClassName="active">
                            Hire from us
                        </NavLink>
                        <NavLink to="/blog" activeClassName="active">
                            Blog
                        </NavLink>
                        <NavLink to="/internship" activeClassName="active">
                            Internship
                        </NavLink>
                        <Button className="orange-round-button">Get Started</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
