import React from 'react';
import img_1 from '../external/img_1.jpg';
import pj1 from '../external/pj1.gif';
import pj2 from '../external/pj2.gif';
import pj3 from '../external/pj3.gif';
import github from '../external/github.svg';

const Project = () => {
    return (
        <div className="project-container">
            <h1 className="project-header">Projects</h1>
            <div className="card-container">
            <div className="card">
                <div className="img-container">
                    <img src={pj1} alt="" className="img" />
                </div>
                <div className="card-content">
                    <h2 className="title">CurlyB.com</h2>
                    <p className="summary">Built with React.js, Node.js, MongoDB, npm, and Bootstrap
User authentication feature allows users to register and log in to the site
Admin-only post creation feature ensures that only approved...
                    </p>
                    <div className="footer">
                        <button className="button"><a className="demo" href='https://curly-b-xgc0.onrender.com'>View Site</a></button>
                        <a href='https://github.com/kaifkalanthar/SpaceY'><img src = {github} className='git-logo'/></a>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="img-container">
                    <img src={pj2} alt="" className="img" />
                </div>
                <div className="card-content">
                    <h2 className="title">HackTech</h2>
                    <p className="summary">I created a website for my c
                    ollege's Hackathon event - HackTech. It displays problem statements and allows team registration.
                     The website was developed using the MERN stack.
                    </p>
                    <div className="footer">
                        <button className="button"><a className="demo" href='https://hacktech.netlify.app'>View Site</a></button>
                        <a href='https://github.com/kaifkalanthar/SpaceY'><img src = {github} className='git-logo'/></a>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="img-container">
                    <img src={pj3} alt="" className="img" />
                </div>
                <div className="card-content">
                    <h2 className="title">Space Y</h2>
                    <p className="summary">My capstone project in data science is a part of IBM's DATA SCIENCE professional certificate course,
                     serving as a culmination of my learning journey.(Prediction analysis)
                    </p>
                    <div className="footer">
                        <button className="button"><a className="demo" href='https://github.com/kaifkalanthar/SpaceY'>View Site</a></button>
                        <a href='https://github.com/kaifkalanthar/SpaceY'><img src = {github} className='git-logo'/></a>
                    </div>
                    

                </div>
            </div>
            
            
            </div>
        </div>
    );
}

export default Project;