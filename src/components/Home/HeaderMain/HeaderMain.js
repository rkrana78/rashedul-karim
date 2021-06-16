import React from 'react';
import './HeaderMain.css'
import Typical from 'react-typical'
import Social from '../Social/Social';
import photo from '../../../images/me.png'

const HeaderMain = () => {
    return (
        <main  className=" row d-flex align-items-center py-5" id="home">

            <div className="col-md-5 offset-1">
                <h4 className="text-1">Hello, I'm</h4>
                <h2 className="text-2 text-white">Rashedul Karim</h2>
                <h4 className="text-3 mb-4">
                    <Typical
                        steps={["& I'm Web Developer", 1000, "& I'm React Developer", 2000, "& I'm MERN Stack Developer", 1000]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </h4>
                <div className="mb-4">
                    <Social />
                </div>
                <a href="https://drive.google.com/uc?export=download&id=1k6D1w8_ItzsL1-wYbGBbjqFiWAUXmuo_" target="_blank" className="btn btn-danger">Download resume</a>
            </div>
            <div className="col-md-5 img-container">
                <img src={photo} alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;