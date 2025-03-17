import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faStackOverflow} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
return (
    <footer className="bg-primary-custom text-main-custom text-center py-3">
        <div className="container">
            <a href="https://www.linkedin.com/in/ellimckinley" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/ellimckinley" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://stackoverflow.com/users/28666274/elli-mckinley" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FontAwesomeIcon icon={faStackOverflow} size="2x" />
            </a>
        </div>
        <div className="text-center">
            <br></br>
                <p>&copy; 2025 Elli McKinley. All rights reserved.</p>
        </div>
    </footer>
);
};

export default Footer;