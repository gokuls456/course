import React from 'react';
// import BrochureCard from '../../components/broucher-card';
import Card from '../../components/card';
import ProfileCard from '../../components/profile-card';
import MainPage from './main-page';
import { Row, Col } from "react-bootstrap";
import json from "../../data.json";
import CardV2 from '../../components/card-v2';

const Program = () => {
    console.log(json);
    return (
        <>
            <MainPage />
            <br />
            <div>
                <h3 className='text-orange text-center text-uppercase'>Why choose us</h3>
                <div className='card-wrapper'>
                    <Row className='mt-3 mb-4'>
                        <Card info={json.cardInfo} />
                    </Row>
                </div>
            </div>
            <div className="profile-wrapper">
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
            </div>
            <Row className='mt-3 mb-3'>
                <h3 className='text-orange text-uppercase'>Free Resources</h3>
                <h1><span className='text-orange'>Supercharge </span>
                    your career right away!
                </h1>
                <p>Learn with India's top product & business leaders. Get real insights you can apply to and a few laughs.</p>
            </Row>
            <Row className='mb-3'>
                {json.courseInfo.map((card, index) => (
                    <Col className='mb-3' xs={12} md={3} lg={3}>
                        <CardV2 key={index} info={card} />
                    </Col>
                )
                )}
            </Row>
        </>
    )
}

export default Program;