import React from 'react';

const Card = ({ title, description, link }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body text-center bg-secondary-custom text-dark-custom">
          <a href={link} target="_blank" rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}>
            <h5 className="card-title">{title}</h5>
            <p>{description}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;