import React from 'react';
import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap';
import json from "../../data.json";

const Footer = () => {
    return (
        <Navbar expand="lg" className='light' style={{ boxShadow: "rgba(0, 0, 0, 0.05) 10px 4px 120px" }}>
            <Container>
                <Row>
                    <Col xs={12} md={4} lg={4}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDdJpvpgr0ex8D_llrc9QSKmyUR5q8Zpd5EQ&usqp=CAU" alt="Logo" style={{ width: "35px", height: "35px", margin: "10px" }} />
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </Col>
                    <Col xs={12} md={8} lg={8} className="m-auto">
                        <Row>
                            <Col>
                                <Nav className="ml-auto d-flex justify-content-center align-items-center">
                                    {json.socialLinks.map(item => <p style={{ margin: "0px 10px"}}><i className={`fa-brands m-1 fa-${item.icon}`} />{item.title}</p>)}
                                </Nav>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default Footer;