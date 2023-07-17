import React from 'react';
import Card from '../../components/card';
import MainPage from './main-page';

const cardInfo = [{
    diplay: "Professional Training",
    info: "One-to-one mentorship from Experts",
    subText: "One-to-one mentorship from Experts"
},
{
    diplay: "Gain work-experience",
    info: "One-to-one mentorship from Experts",
    icon: 'fa-chalkboard-teacher',
    subText: "Challenge and Task-based learning"
},
{
    diplay: "Great Career",
    info: "One-to-one mentorship from Experts",
    icon: "fa-bullseye",
    subText: "100% Life-long Placement Assistance"
},
{
    diplay: "Quality Classes",
    info: "One-to-one mentorship from Experts",
    subText: "Live Online sessions & flexible timing"
}
]

const Program = () => {
    return (
        <>
            <MainPage />
            <br />
            <div>
                <h3 className='text-center'>WHY CHOOSE US</h3>
                <div className='card-wrapper'>
                <Card info={cardInfo} />
                </div>
            </div>
        </>
    )
}

export default Program;