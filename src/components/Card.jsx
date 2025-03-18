import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Card = ({ title, description, githubLink, websiteLink }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="card-body text-center bg-secondary-custom text-dark">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h5 className="card-title">{title}</h5>
                        <p>{description}</p>
                        <FaGithub size={30} />
                    </a>
                    {websiteLink && (
                        <a href={websiteLink} target="_blank" rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit', marginLeft: '10px' }}>
                            <FaExternalLinkAlt size={30} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;