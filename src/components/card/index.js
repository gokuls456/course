import React from 'react';
import './index.css';

// const Card = ({info}) => {
//   return info.map((item) => {
// <div className="card container">
//   <div className="card-body">
//     <div className="card-image" style={{ color: '#213661' }}>
//       <i className="fas fa-laptop-code fa-5x"></i>
//     </div>
//     <h4 className="card-title">{item.displayName}</h4>
//     <p className="card-text">
//       Go through the course content thoroughly and enroll before the batch
//       begins.
//     </p>
//   </div>
// </div>
//   })
// };

const Card = ({ info }) => {
    console.log('info', info);
    return (
        <>
            {info.map((item) => {
                return (
                    <div className="card container">
                        <div className="card-body">
                            <div className="card-image" style={{ color: '#213661' }}>
                                <i className={item.icon ? `fas ${item.icon} fa-5x` : "fas fa-laptop-code fa-5x"}></i>
                            </div>
                            <h4 className="card-title">{item.diplay}</h4>
                            <p className="card-text">
                                {item.subText}
                            </p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Card;
