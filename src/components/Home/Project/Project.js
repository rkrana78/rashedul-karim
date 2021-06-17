import React from 'react';
import aqua from '../../../images/aqua3.png'
import mobile from '../../../images/mobile-bazar.png'
import soccer from '../../../images/soccer2png.png'
import hungry from '../../../images/hungry.png'
import slider from '../../../images/slider.png'
import fast from '../../../images/fast-motion.png'
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import './Project.css'

const projectsData = [
    {
        title: 'Aqua  Bottle Service',
        details: 'A complete MERN Stack project.',
        tools: 'HTML, CSS, React, MongoDB, NodeJS, Express,Bootstrap, Firebase, Heroku',
        img: aqua,
        github: 'https://github.com/rkrana78/aqua-client',
        demo: 'https://aqua-393de.web.app/'
    },
    {
        title: 'Mobile Bazar',
        details: 'Mobile Bazar is an e-commerce website.',
        tools: 'HTML, CSS, React, MongoDB, NodeJS, Express,Bootstrap, Firebase, Heroku',
        img: mobile,
        github: 'https://github.com/rkrana78/mobile-bazar-client',
        demo: 'https://mobile-bazar-8.web.app/'
    },
    {
        title: 'Soccer Team',
        details: 'List & details of English Premier League teams',
        tools: 'HTML, CSS, Bootstrap, JavaScript, React Js',
        img: soccer,
        github: 'https://github.com/rkrana78/soccer-team',
        demo: 'https://604a51036ad8b100d4180210--festive-clarke-b8e123.netlify.app/'
    },
    {
        title: 'Hungry Monster',
        details: 'Hungry monster is a food recipe website.search food by name or symbol.',
        tools: 'HTML, CSS, Bootstrap, JavaScript, ES6',
        img: hungry,
        github: 'https://github.com/rkrana78/hungry-monster',
        demo: 'https://rkrana78.github.io/hungry-monster/index.html'
    },
    {
        title: 'Fancy Slider',
        details: 'Fancy slider is a slider maker.',
        tools: 'HTML, CSS, Bootstrap, JavaScript, ES6',
        img: slider,
        github: 'https://github.com/rkrana78/fancy-slider',
        demo: 'https://rkrana78.github.io/fancy-slider/index.html'
    },
    {
        title: 'Fast Motion',
        details: 'Fast Motion is a transport booking system',
        tools: 'HTML, CSS, Bootstrap, JavaScript, ES6, React, ',
        img: fast,
        github: 'https://github.com/rkrana78/fast-motion',
        demo: 'https://fast-motion-4.web.app/'
    },


]

const Project = () => {
    return (
        <div  className="text-center pt-5 project-container bg-light" id="project">
            <h2 style={{color:  '#25255F'}}>My Works</h2>
           
           <div class="row offset-1 my-works p-5">
                {
                    projectsData.map(project => <ProjectDetail project={project} key={project.title}></ProjectDetail>)
                }
            </div>
           

        </div>
    );
};

export default Project;
