import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';
import './Social.css'

const Social = () => {
    return (
        <div className=" w-25 icon d-flex justify-content-between ">
            <div className="">
                <a className="text-white" href="https://github.com/rkrana78" target="_blank"><FontAwesomeIcon icon={faGithub} /> </a>
            </div>
            <div className="">
            <a className="text-white" href="https://www.linkedin.com/in/rashedul-karim78/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /> </a>
            </div>
            <div className="">
            <a className="text-white" href="https://www.facebook.com/rashedul.karim78/" target="_blank"><FontAwesomeIcon icon={faFacebook} /> </a>
            </div>

        </div>
    );
};

export default Social;