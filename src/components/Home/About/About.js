import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="about-container  " id="about">
            <div  className="row">
                <div className="col-md-4 offset-1 mt-2 mb-3">
                    <h2>About Me</h2>
                    <hr />
                    <p>I'am Rashedul Karim & I am a Passionate Web Developer who Specializes in React.js. Currently, I have been working with modern technologies like JavaScript, React.js, Node.js, Express.js, MongoDB,WordPress.</p>
                    <p><span style={{ color: '#25255F', fontWeight: 'bold' }}>Name</span>: Rashedul Karim</p>
                    <p><span style={{ color: '#25255F', fontWeight: 'bold'  }}>Email</span>: rashedul.karim7858@gmail.com</p>
                    <p><span style={{ color: '#25255F', fontWeight: 'bold'  }}>Education</span>: BSc in CSE</p>
                    <p><span style={{ color: '#25255F', fontWeight: 'bold'  }}>Phone</span>: +8801521485412</p>
                    <p><span style={{ color: '#25255F', fontWeight: 'bold'  }}>Address</span>: Chittagong, Bangladesh</p>
                </div>
                <div className="col-md-5 offset-1 mt-2">
                    <h2>My Skills</h2>
                    <hr />
                    <h4>Programming & Web Technologies:</h4>
                    <button className="btn btn-info btn-sm  m-1">HTML5</button> <button className="btn btn-info btn-sm m-1">CSS3</button> <button className="btn btn-info btn-sm m-1">Bootstrap</button> <button className="btn btn-info btn-sm m-1">MySQL</button> <button className="btn btn-info btn-sm m-1">JavaScript</button> <button className="btn btn-info btn-sm m-1">ES6</button> <button className="btn btn-info btn-sm m-1">React</button> <button className="btn btn-info btn-sm m-1">MongoDB</button> <button className="btn btn-info btn-sm m-1">Node JS</button> <button className="btn btn-info btn-sm m-1">Express JS</button>

                    <h4 className="mt-2">Tools:</h4>
                    <button className="btn btn-info btn-sm m-1">GitHub</button> <button className="btn btn-info btn-sm m-1">Chrome Dev Tools</button> <button className="btn btn-info btn-sm m-1">Code Blocks</button> <button className="btn btn-info btn-sm m-1">VS Code</button> <button className="btn btn-info btn-sm m-1">Heroku</button> <button className="btn btn-info btn-sm m-1">Firebase</button> <button className="btn btn-info btn-sm m-1">Netlify</button>

                    <h4 className="mt-2">Familiar:</h4>
                    <button className="btn btn-info btn-sm m-1">Redux.js</button> <button className="btn btn-info btn-sm m-1">TypeScript</button> <button className="btn btn-info btn-sm m-1">React Native</button> <button className="btn btn-info btn-sm m-1">WordPress</button> <button className="btn btn-info btn-sm m-1">Material UI</button> <button className="btn btn-info btn-sm m-1">C</button> <button className="btn btn-info btn-sm m-1">PHP</button> <button className="btn btn-info btn-sm m-1">Laravel</button> 

                </div>
            </div>
        </div>
    );
};

export default About;