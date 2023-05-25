import React from 'react';
import img_1 from '../external/img_1.jpg';
import pj1 from '../external/pj1.gif';
import pj2 from '../external/pj2.gif';
import pj3 from '../external/pj3.gif';
import github from '../external/github.svg';


const renderCard = (title, summary, src, liveDemo, srcCode) => {
    return (
        <div className="card" key={title}>
            <div className="img-container">
                <img src={src} alt="" className="img" />
            </div>
            <div className="card-content">
                <h2 className="title">{title}</h2>
                <p className="summary">{summary}</p>
                <div className="footer">
                    <button className="button"><a className="demo" href={liveDemo} target="_blank" rel="noopener noreferrer">View Site</a></button>
                    <a href={srcCode} target="_blank" rel="noopener noreferrer"><img src={github} className='git-logo' /></a>
                </div>
            </div>
        </div>
    )
}

const Project = () => {
    const projectData = [
        {
            title: 'Game-Hub',
            summary: ' GameHub is a video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more.',
            src: pj3,
            liveDemo: 'https://game-hub-psi-rust.vercel.app/',
            srcCode: 'https://github.com/kaifkalanthar/Game-hub'
        },
        {
            title: 'Curly_B.com',
            summary: 'Built with React.js, Node.js, MongoDB, npm, and Bootstrap User authentication feature allows users to register and log in to the site Admin-only post creation feature ensures that only approved...',
            src: pj1,
            liveDemo: 'https://curly-b-xgc0.onrender.com',
            srcCode: 'https://github.com/kaifkalanthar/Blogging'
        },
        {
            title: 'HackTech',
            summary: `I created a website for my colleges Hackathon event - HackTech. It displays problem statements and allows team registration.The website was developed using the MERN stack.`,
            src: pj2,
            liveDemo: 'https://hacktech.netlify.app',
            srcCode: 'https://github.com/kaifkalanthar/HackTech'
        },
    ]
    return (
        <div className="project-container" id='project'>
            <h1 className="project-header">Projects</h1>
            <div className="card-container">
                {projectData.map(data =>
                    renderCard(data.title, data.summary, data.src, data.liveDemo, data.srcCode)
                )} 
            </div>
        </div>
    );
}

export default Project;