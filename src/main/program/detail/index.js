import React, { useState } from 'react';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import FormComponent from './form';

const CourseDetail = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find(item => item.id === Number(id));

  // State to manage the modal visibility
  const [showModal, setShowModal] = useState(false);

  // Function to handle modal show
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Row className='mt-3'>
      <Col md={6} xs={12} lg={6} className='align-items-center m-auto'>
        <h1 className='mb-5 text-orange'>{course?.title}</h1>
        <div className="course-details">
          <p>{course?.description}</p>
          <p><i class="fa-solid fa-calendar-days"></i> {course?.duration}</p>
          <p><i className='fa-solid fa-calendar-day' /> {course?.date}</p>
          <p><i className='fa-solid fa-clock' /> {course?.time}</p>
        </div>
        <Button className='rounded orange-round-button m-1' onClick={handleShowModal}>
          Apply & Start For Free
        </Button>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Apply for Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormComponent onSubmit={data => console.log(data)}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button type='submit' variant="primary" onClick={handleCloseModal}>
              Apply
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
      <Col md={6} xs={12} lg={6}>
        <div className="image-container">
          <img width="992" height="600" src={course?.gifUrl || course?.imageUrl} alt="Supercharge your career" />
        </div>
      </Col>
    </Row>
  );
};

export default CourseDetail;
