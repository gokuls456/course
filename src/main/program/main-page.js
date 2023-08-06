import React from 'react';
import './main-page.css';
import { Row, Col } from "react-bootstrap"
const MainPage = () => {
  return (
    <>
      <Row className='mt-3'>
        <Col md={6} xs={12} lg={6} className='align-items-center m-auto'><h1 className='mb-5'>Supercharge your career in a new, <br /> <span className='text-orange'>personalised way</span></h1>
          <p>
          Tech Vedaa is an Ed-tech company that focuses on providing personalized learning solutions to help people crack their dream roles at the best tech companies. And, bestow tech-skills with the comfort of your native language..          </p></Col>
        <Col md={6} xs={12} lg={6}><div className="image-container">
          <img width="992" height="600" src="https://www.careerguide.com/career/wp-content/uploads/2021/05/comp_animation_3.gif" alt="Supercharge your career" />
        </div></Col>
      </Row></>
  );
};

export default MainPage;
