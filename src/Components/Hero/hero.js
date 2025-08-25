import React from "react";
import './hero.css';
import ParticlesBackground from "../ParticlesDesign/particles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
    return (
            <div id="hero">
            <ParticlesBackground />
                <div className="hero">
                    <div className="second-hero-div">
                        <div>Heyllo, I'm <span>Oluwasoromidayo Asaolu</span>.</div>
                        <div>I'm a front-end developer.</div>
                        <a  href="#projects"><button className="hero-btn">View my projects</button></a>
                        <div className="hero-icons">
                            <a href="https://github.com/Oluwasoromidayo-Asaolu" target="_blank" rel="noreferrer"><FontAwesomeIcon className="hero-icon" icon={faGithub} /></a>
                            <a href="https://www.linkedin.com/in/oluwasoromidayo-asaolu-269091251/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="hero-icon" icon={faLinkedin} /></a>
                            <a href="https://lichess.org/@/Oluwasoromidayo" target="_blank" rel="noreferrer"><FontAwesomeIcon className="hero-icon" icon={faChessKnight} /></a>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Hero;
