import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import json from "../../data.json";

const Footer = () => {
    return (
        <footer style={{position: 'sticky', bottom: 0, borderTop: '1px solid #d2d0d0', width: '100%', padding: '15px'}}>
            <Container>
                <Row>
                    <Col xs={12} md={4} lg={4} className="d-flex justify-content-center justify-content-md-start " style={{ gap: '0.5em' }}>
                        <i className="fa fa-home mt-1" />
                        <p style={{ maxWidth: '200px' }}>
                            175 & 176, Bannerghatta
                            Main Rd, Dollars Colony,
                            Bengaluru, Karnataka
                            560076, India
                        </p>
                    </Col>
                    <Col xs={12} md={4} lg={4} className="text-center" style={{ gap: '0.5em' }}>
                        <h5 className='text-orange'>Tech Vedaa</h5>
                        <span>
                            {json.footerInfo.map((item) => {
                                return(
                                    <span>{item.displayName}</span>
                                )
                            })}

                        </span>
                    </Col>
                </Row>
            </Container>
            <Container>

            <Row>
                <Col xs={12} md={4} lg={4} className="d-flex justify-content-center justify-content-md-start " style={{ gap: '0.5em' }}>
                        <i className="fa fa-envelope mt-1" />
                        <p style={{ maxWidth: '200px' }}>
                            TechVedaa@gmail.com
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={12} md={4} lg={4} className="d-flex justify-content-center justify-content-md-start">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </Col>
                    <Col xs={12} md={8} lg={8} className="m-auto">
                        <Row>
                            <Col>
                                <Nav className="ml-auto d-flex justify-content-center justify-content-md-end align-items-center">
                                    {json.socialLinks.map(item => <p style={{ margin: "0px 10px" }}><i className={`fa-brands m-1 fa-${item.icon}`} />{item.title}</p>)}
                                </Nav>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;