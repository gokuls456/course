import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import "./hire.css";
import datajson from "../../data.json";
import { useState } from "react";
import * as Icons from '../../icons/index';

const HirePage = () => {

    const formValue = {
        fullName: "",
        organisationName: "",
        role: "",
        mobileNumber: "",
        email: "",
        profileDescription: ""
    };
    const aboutCheck = [
        { name: "FaceBook", type: "checkbox" },
        { name: "LinkedIn", type: "checkbox" },
        { name: "Twitter", type: "checkbox" },
        { name: "Google", type: "checkbox" },
        { name: "Internet News", type: "checkbox" },
        { name: "Instagram", type: "checkbox" },
        { name: "Others", type: "checkbox" },
    ]
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState(formValue);
    const details = datajson.hirePageContent;

    const handleStartBtn = () => {
        setModalOpen(true);
    }

    const handleForm = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <>
            <Row className="hire-page-container">
                <Col xs={{ span: 12, order: 2}} md={{ span: 7, order: 1}} className="hire-details d-flex justify-content-center align-items-start flex-column">
                    <span className="hire-heading"><span>{details.title}</span><br /><span>{details.subTitle}</span></span>
                    <p className="hire-description">{details.description}</p>
                    <Button className="hire-btn" onClick={handleStartBtn}>Start Hiring <i className={`${details.buttonIcon} px-1`}></i></Button>
                    <span className="requirement-text">{details.requirementNote}</span>
                </Col>
                <Col xs={{ span: 12, order: 1}} md={{ span: 5, order: 2}} className="d-flex justify-content-center align-items-center">
                    <img src={Icons[`${details.hireSideImg}`]} alt="" className="hire-page-image" />
                </Col>
                <Modal show={modalOpen} onHide={() => {
                    setModalOpen(false);
                    setFormData(formValue)
                }} className="hire-modal">
                    <Modal.Header closeButton>
                        <Modal.Title className="form-title">Hiring Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit} className="form-body">
                            <Form.Control type="text" placeholder="Your Full Name" onChange={handleForm} className="hire-form" required name="fullName" />
                            <Form.Control type="text" placeholder="Your Organisation's Name" onChange={handleForm} className="hire-form" required name="organisationName" />
                            <Form.Control type="text" placeholder="Your Role / Designation In Your organisation" onChange={handleForm} className="hire-form" required name="role" />
                            <Form.Control type="number" placeholder="Your Phone Number" onChange={handleForm} className="hire-form" required name="mobileNumber" />
                            <Form.Control type="email" placeholder="Your Official Email Address" onChange={handleForm} className="hire-form" required name="email" />
                            <Form.Control as="textarea" rows={3} placeholder="Briefly describe the nature of profile?" onChange={handleForm} className="hire-form" required name="profileDescription" />
                            <Form.Control type="text" placeholder="In what timeframe (in weeks) are you looking to close hiring? " onChange={handleForm} className="hire-form" required name="timeFrame" />
                            <Form.Control type="text" placeholder="Can you share an expected salary range for the position(s)?" onChange={handleForm} className="hire-form" required name="expectedSalary" />
                            <Row className="check-form">
                                <span className="form-check-question mb-1">Where did you hear about usThis question is required?</span>
                                {aboutCheck.map((item) => (
                                    <Col xs={6} md={6}>
                                        <Form.Check type={item.type} onChange={handleForm} label={item.name} className="hire-form-check" name={item.name} />
                                    </Col>
                                ))}
                            </Row>
                            <div className=" form-btns">
                                <Button variant="primary" type="submit" className="form-submit-btn">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Row>
        </>
    );
};

export default HirePage;