import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CourseDetail = ({ courses }) => {
  const {id} = useParams();
  const course = courses.find(item => item.id === Number(id));
  return (
    <div style={{ backgroundImage: `url(${course.imageUrl})`, minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container>
        <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col md={8} lg={6}>
            <div className="course-details">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <p>Duration: {course.duration}</p>
              {/* Add other course details as needed */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseDetail;
