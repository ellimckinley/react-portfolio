import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Card = ({ title, description, link }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="card-body text-center bg-secondary text-dark">
                    <a href={link} target="_blank" rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h5 className="card-title">{title}</h5>
                        <p>{description}</p>
                        <FaGithub size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;