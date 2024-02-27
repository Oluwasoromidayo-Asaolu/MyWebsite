import React from "react";
import './about.css'; 
import myImage from './myImage.jpg';
import CV from './MyCV.pdf';
const About = () => {
    return(
        <section id="about">
            <div className="about">
                <div className="title-div">
                    <h1>ABOUT ME</h1>
                    <span className="header-bar"></span>
                </div>
            <div className="about-second-div">
                    <img src={myImage} className="myImage" alt="profile-img" />
                    <div>
                        <p>
                            I'm Oluwasoromidayo Asaolu, a passionate Web Developer. My expertise is centered on front-end development, where I specialize in creating seamless and user-friendly websites. I bring to the table a deep understanding of HTML, CSS, and JavaScript, the fundamental elements for creating captivating web interfaces. My focus is on building engaging and interactive user interfaces.
                        </p>
                        <p>
                        Besides coding, I enjoy playing chess, which sharpens my strategic thinking, and I'm a dedicated football fan. I'm here to connect with clients and work together to create something amazing in the exciting world of web development.
                        </p>
                        <a rel="noreferrer noopener" target="_blank" href={CV}>
                            <button className="resume-button">VIEW RESUME</button>
                        </a>  
                    </div>
            </div>
            </div>
        </section>
    );
}
export default About;