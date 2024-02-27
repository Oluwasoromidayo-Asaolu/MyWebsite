import React from "react";
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return(
        <section>
            <div className="footer">
                <a href="#hero"><FontAwesomeIcon icon={faAngleUp} className="footer-to-top-icon" rel="noreferrer"/></a>
                <div className="footer-icons">
                    <a href="https://github.com/Oluwasoromidayo-Asaolu" target="_blank" rel="noreferrer"><FontAwesomeIcon className="footer-icon" icon={faGithub} /></a>
                    <a href="https://www.instagram.com/asaoluoluwasoromidayocaleb/" target="blank" rel="noreferrer"><FontAwesomeIcon className="footer-icon" icon={faInstagram} /></a>
                    <a href="https://www.linkedin.com/in/oluwasoromidayo-asaolu-269091251/" target="blank" rel="noreferrer"><FontAwesomeIcon className="footer-icon" icon={faLinkedin} /></a>
                    <a href="https://twitter.com/OLUWASOROMIDA18" target="blank"><FontAwesomeIcon className="footer-icon" rel="noreferrer" icon={faTwitter} /></a>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#about" rel="noreferrer">About</a></li>
                        <li><a href="#projects" rel="noreferrer">Projects</a></li>
                        <li><a href="#contact" rel="noreferrer">Contact</a></li>
                    </ul>
                </div>
                <div className="sub-footer">
                <hr className="footer-hr"/>
                    <p>Designed by Oluwasoromidayo Asaolu &#64; 2024 </p>
                </div>
            </div>
        </section>
    );
}
export default Footer;