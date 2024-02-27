import React from "react";
import './project.css';
import Project1 from './project1.png';
import Project2 from './project2.png';
import Project3 from './project3.png';
const Projects = () => {
    return(
        <section id="projects">
            <div className="project">
                <div className="title-div">
                    <h1>PROJECTS</h1>
                    <span className="header-bar"></span>
                </div>
                <div className="project-div">
                    <div>
                        <h2>Image Generator</h2>
                        <p>I made an Image Generator app with React JS and CSS. It helped me get better at using React and styling with CSS. I learned how to solve problems especially those related to API fetching and improved my skills in front-end development.
                        </p>
                        <a href="https://oluwasoromidayo-asaolu.github.io/image-generator/" target="_blank" rel="noreferrer"><button className="see-live-button">SEE LIVE</button></a>
                        <a href="https://github.com/Oluwasoromidayo-Asaolu/image-generator" target="_blank" rel="noreferrer" className="projects-sourcecode-button">Source Code</a>
                    </div>
                        <a href="https://oluwasoromidayo-asaolu.github.io/image-generator/" target="_blank" rel="noreferrer"><img className="project-image" alt="project_img" src={Project1}></img></a>
                </div>
                <div className="project-div">
                    <div>
                        <h2>Weather App</h2>
                        <p>In creating the weather app, I utilized HTML, CSS, and JavaScript. Challenges emerged in handling real-time data and APIs, prompting me to enhance my coding and debugging skills. This project served as a valuable learning experience, teaching me about API integration, responsive design, and problem-solving.
                        </p>
                        <a href="https://oluwasoromidayo-asaolu.github.io/Weather-App/" target="_blank" rel="noreferrer"><button className="see-live-button">SEE LIVE</button></a>
                        <a href="https://github.com/Oluwasoromidayo-Asaolu/Weather-App" target="_blank" rel="noreferrer" className="projects-sourcecode-button">Source Code</a>
                    </div>
                        <a href="https://oluwasoromidayo-asaolu.github.io/Weather-App/" target="_blank" rel="noreferrer"><img className="project-image" alt="project_img" src={Project2}></img></a>
                </div>
                <div className="project-div">
                    <div>
                        <h2>To-Do List</h2>
                        <p>I developed a practical To-Do List web app using HTML, CSS, and JavaScript. This project honed my front-end development skills, and I enjoyed tackling various challenges, proving my proactive approach to solving problems.
                        </p>
                        <a href="https://oluwasoromidayo-asaolu.github.io/Todo-List/" target="_blank" rel="noreferrer"><button className="see-live-button">SEE LIVE</button></a>
                        <a href="https://github.com/Oluwasoromidayo-Asaolu/Todo-List" target="_blank" rel="noreferrer" className="projects-sourcecode-button">Source Code</a>
                    </div>
                        <a href="https://oluwasoromidayo-asaolu.github.io/Todo-List/" target="_blank" rel="noreferrer"><img className="project-image" alt="project_img" src={Project3}></img></a>
                </div>
            </div>
        </section>
    );
}
export default Projects;