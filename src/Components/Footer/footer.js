import React from "react";
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faChessKnight } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return(
        <section>
            <div className="footer">
                <a href="#hero"><FontAwesomeIcon icon={faAngleUp} className="footer-to-top-icon" rel="noreferrer"/></a>
                <div className="footer-icons">
                    <a href="https://github.com/Oluwasoromidayo-Asaolu" target="_blank" rel="noreferrer"><FontAwesomeIcon className="hero-icon" icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/oluwasoromidayo-asaolu-269091251/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="hero-icon" icon={faLinkedin} /></a>
                    <a href="https://lichess.org/@/Oluwasoromidayo" target="_blank" rel="noreferrer"><FontAwesomeIcon className="hero-icon" icon={faChessKnight} /></a>
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
                    <p>Designed by Oluwasoromidayo Asaolu &#64; 2025 </p>
                </div>
            </div>
        </section>
    );
}
export default Footer;