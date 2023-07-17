import React from 'react';
import BrochureCard from '../../components/broucher-card';
import Card from '../../components/card';
import ProfileCard from '../../components/profile-card';
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

const profiles = [
    {
        name: 'Michele Miller',
        title: 'Web Developer',
        imageUrl: 'https://picsum.photos/130/130?image=1027',
        socialLinks: [
          { icon: 'user', url: 'https://codepen.io/collection/XdWJOQ/' },
        ],
      },
      {
        name: 'Patricia Knott',
        title: 'Web Developer',
        imageUrl: 'https://picsum.photos/130/130?image=839',
        socialLinks: [
          { icon: 'user', url: 'https://codepen.io/collection/XdWJOQ/' },
        ],
      },
      {
        name: 'Justin Ramos',
        title: 'Web Developer',
        imageUrl: 'https://picsum.photos/130/130?image=856',
        socialLinks: [
          { icon: 'user', url: 'https://codepen.io/collection/XdWJOQ/' },
        ],
      },
      {
        name: 'Mary Huntley',
        title: 'Web Developer',
        imageUrl: 'https://picsum.photos/130/130?image=836',
        socialLinks: [
          { icon: 'user', url: 'https://codepen.io/collection/XdWJOQ/' },
        ],
      },
];

const Program = () => {
    return (
        <>
            <MainPage />
            <br />
            <div>
                <h3 className='text-orange text-center text-uppercase'>Why choose us</h3>
                <div className='card-wrapper'>
                    <Card info={cardInfo} />
                </div>
            </div>
            <div className="profile-wrapper">
                <h3 className='text-orange text-center text-uppercase'>Meet Our Coaches</h3>
                <h1 className='text-center'>Get personalised coaching
                    from <span className='text-orange '>world-class leaders</span>
                </h1>
                <p className='text-center'>We only invite industry leaders that have succeeded at top companies to be coaches.
                    Quality learning comes from quality experience.

                </p>
                <div className="row card-wrapper">
                    {profiles.map((profile, index) => (
                        <ProfileCard key={index} {...profile} />
                    ))}
                </div>
            </div>
            <div>
            <h3 className='text-orange text-uppercase'>Free Resources</h3>
                <h1><span className='text-orange'>Supercharge </span>
                your career right away!
                </h1>
                <p>Learn with India's top product & business leaders. Get real insights you can apply to and a few laughs.</p>
                {/* <BrochureCard /> */}
            </div>
        </>
    )
}

export default Program;