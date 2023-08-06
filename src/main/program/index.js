import React from 'react';
// import BrochureCard from '../../components/broucher-card';
import Card from '../../components/card';
// import ProfileCard from '../../components/profile-card';
import MainPage from './main-page';
import { Row, Col, Button } from "react-bootstrap";
import json from "../../data.json";
import * as Icons from '../../icons';
import { NavLink } from 'react-router-dom';

const Program = () => {
    return (
        <>
            <MainPage />
            <br />
            <div className='mt-5 mb-5'>
                <h3 className='text-orange text-center text-uppercase'>Why choose us</h3>
                <div className='card-wrapper'>
                    <Row className='mt-3 mb-4'>
                        <Card info={json.cardInfo} />
                    </Row>
                </div>
            </div>
            {/* <div className="profile-wrapper mt-5 mb-5">
                <h3 className='text-orange text-center text-uppercase'>Meet Our Coaches</h3>
                <h1 className='text-center'>Get personalised coaching
                    from <span className='text-orange '>world-class leaders</span>
                </h1>
                <p className='text-center'>We only invite industry leaders that have succeeded at top companies to be coaches.
                    Quality learning comes from quality experience.

                </p>
                <Row className='profile-card-row' style={{ display: "flex", justifyContent: 'center' }}>
                    {json.profiles.map((profile, index) => (
                        <Col xs={12} md={3} lg={3}>
                            <ProfileCard key={index} {...profile} />
                        </Col>
                    ))}
                </Row>
            </div> */}
            <Row className='mt-5 mb-3' id="programList">
                <h3 className='text-orange text-uppercase'>Free Resources</h3>
                <h1><span className='text-orange'>Supercharge </span>
                    your career right away!
                </h1>
                <p>Learn with India's top product & business leaders. Get real insights you can apply to and a few laughs.</p>
            </Row>
            <Row className='mb-3'>
                {json.courseInfo.map((card, index) => (
                    <Col className='mb-3 course-box' key={index} xs={12} md={3} lg={3}>
                        <span>
                            <img alt={card.title} src={card.imageUrl ? card.imageUrl : Icons[`${card?.imagePath}`]} width={100} hegiht={100}/>
                        </span>
                        <h5 className='p-3'>{card.title}</h5>
                        <NavLink className="orange-button-link" to={card.path}><Button className='card-button orange-round-button'><i className='fas fa-play p-3' />GET MORE INFO</Button></NavLink>
                    </Col>
                )
                )}
            </Row>
        </>
    )
}

export default Program;