import React, { useState } from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import FormComponent from './form';
import "./details.css"

const CourseDetail = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find(item => item.id === Number(id));

  // State to manage the modal visibility
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});

  // Function to handle modal show
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleForm = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    console.log(formData);
  }

  return (
    <Row className='mt-3 detail-container'>
      <Col md={6} xs={12} lg={6} className='align-items-center m-auto'>
        <h1 className='mb-5 text-orange'>{course?.title}</h1>
        <div className="course-details">
          <p>{course?.description}</p>
          <p><i className="fa-solid fa-calendar-days"></i> {course?.duration}</p>
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
            <FormComponent onSubmit={data => console.log(data)} />
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
      <Col md={6} xs={12} lg={6} className="mt-4 d-flex justify-content-end align-items-center">
        <div className='login-form-container'>
          <div className='login-form-card'>
            <p className='heading-text'>I'm Interested</p>
            <Form onSubmit={handleSubmit} className="login-form">
              <Form.Control type="text" name="name" placeholder='Name' onChange={handleForm} required className='form-input' />
              <Form.Control type="email" name="email" placeholder='Email' onChange={handleForm} required className='form-input' />
              <Form.Control type="number" name="mobileNumber" placeholder='Mobile Number' onChange={handleForm} required className='form-input' />
              <Form.Check type="checkbox" name="discountCoupon" label="Do you have a discount coupon?" onChange={handleForm} required className='form-input-check' />
              <Button className='login-submit-btn' type='submit'>Submit</Button>
              <p className='instruction-text'>By clicking submit, I authorize Team to Call me about its products & offers. This consent will override any registration for DNC/ NDNC</p>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default CourseDetail;
