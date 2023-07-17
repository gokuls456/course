import React from 'react';
import './main-page.css';
import { Row, Col } from "react-bootstrap"
const MainPage = () => {
  return (
    <>
      <Row>
        <Col md="6" className='align-items-center d-grid'><h1>Supercharge your career in a new, <br /> <span className='text-orange'>personalised way</span></h1>
          <p>
            We all agree that no two people have identical career journeys, then why do we settle for generic one-size-fit-all courses? Our programs are personalised so you can take a focused approach to achieve your goals in weeks, not years!
          </p></Col>
        <Col md="6"><div className="image-container">
          <img width="992" height="600" src="https://www.elearningnews.it/_resources/images/20181120_170921_blobid43.gif" alt="Supercharge your career" />
        </div></Col>
      </Row></>
  );
};

export default MainPage;
