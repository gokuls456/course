import React from 'react';
import "./index.css";

const ProfileCard = ({ name, title, imageUrl, socialLinks }) => {
  return (
    <div className="our-team">
      <div className="picture">
        <img className="img-fluid" src={imageUrl} alt={name} />
      </div>
      <div className="team-content">
        <h3 className="name">{name}</h3>
        <h4 className="title">{title}</h4>
      </div>
      <ul className="social">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} className={`fas fa-${link.icon}`} aria-hidden="true"></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;
