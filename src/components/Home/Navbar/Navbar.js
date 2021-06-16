import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-container container">
        <div className="container-fluid">
            <a href="#" className="navbar-brand" ><h1 className="text-light ms-2" style={{fontFamily: 'cursive'}}>Rashed</h1></a>
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <a href="#" className="nav-link active me-3 mt-1 text-light" aria-current="page" >Home</a>
                    <a href="#about" className="nav-link me-3 mt-1 text-light" >About</a>
                    <a href="/#project" className="nav-link me-3 mt-1 text-light" >Projects</a>
                    <a href="#" className="nav-link me-3 mt-1 text-light" >Blogs</a>
                    <a href="#contact" className="nav-link me-3 mt-1 text-light" >Contact us</a>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;