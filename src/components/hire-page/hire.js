import { Row, Col, Button } from "react-bootstrap";
import "./hire.css";
import datajson from "../../data.json";

const HirePage = () => {
    const details = datajson.hirePageContent;
    return (
        <>
            <Row className="hire-page-container">
                <Col xs={12} md={7} className="hire-details d-flex justify-content-center align-items-start flex-column">
                    <span className="hire-heading"><span>{details.title}</span><br /><span>{details.subTitle}</span></span>
                    <p className="hire-description">{details.description}</p>
                    <Button className="hire-btn">Start Hiring <i class={`${details.buttonIcon} px-1`}></i></Button>
                    <span className="requirement-text">{details.requirementNote}</span>
                </Col>
                <Col xs={12} md={5} className="d-flex justify-content-center align-items-center">
                    <img src={details.hireSideImg} alt="" className="hire-page-image"/>
                </Col>
            </Row>
        </>
    );
};

export default HirePage;