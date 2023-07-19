import React from 'react';
import './index.css';
import { Col } from "react-bootstrap";

const Card = ({ info }) => {
    return (
        <>
            {info.map((item, index) => {
                return (
                    <Col style={{ width: '18rem', cursor: 'pointer', margin: 'auto' }} md={3} xs={12} lg={3} className="mt-2 mb-2">
                        <div key={index} className="card-v1 container">
                            <div className="card-v1-body">
                                <div className="card-v1-image" style={{ color: '#213661' }}>
                                    <i className={item.icon ? `fas ${item.icon} fa-5x` : "fas fa-laptop-code fa-5x"}></i>
                                </div>
                                <h4 className="card-v1-title">{item.diplay}</h4>
                                <p className="card-v1-text">
                                    {item.subText}
                                </p>
                            </div>
                        </div>
                    </Col>

                )
            })}
        </>
    )
}

export default Card;
