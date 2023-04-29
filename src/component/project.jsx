import React from 'react';
import github from '../external/github.svg';
import pj1 from '../external/pj1.svg';
import pj2 from '../external/pj2.svg';

const Project = () => {
    return (
        <div className="project-container">
            <h1 className="project-header">PROJECT</h1>
            <div className="pj-cards-container">
                <div className="pj-card">
                <img className='pj-img' src = {pj1}/>
                    <h1 className="card-header">Curly_B - Blogging website</h1>
                    <u1 className="abt-pj">
                        <li className="abt-li">Built with React.js, Node.js, MongoDB, npm, and Bootstrap</li>
                        <li className="abt-li">User authentication feature allows users to register and log in to the site</li>
                        <li className="abt-li">Admin-only post creation feature ensures that only approved content is added to the site</li>
                    </u1>
                    <div className="abt-action">
                        <button className="pj-btn">View site</button>
                        <img src = {github} className='git-logo'/>
                    </div>
                    
                </div>
                <div className="pj-card">
                <img className='pj-img' src = {pj2}/>
                    <h1 className="card-header">Curly_B - Blogging website</h1>
                    <u1 className="abt-pj">
                        <li className="abt-li">Built with React.js, Node.js, MongoDB, npm, and Bootstrap</li>
                        <li className="abt-li">User authentication feature allows users to register and log in to the site</li>
                        <li className="abt-li">Admin-only post creation feature ensures that only approved content is added to the site</li>
                    </u1>
                    <div className="abt-action">
                        <button className="pj-btn">View site</button>
                        <img src = {github} className='git-logo'/>
                    </div>
                    
                </div>
                <div className="pj-card">
                    <h1 className="card-header">Curly_B - Blogging website</h1>
                    <u1 className="abt-pj">
                        <li className="abt-li">Built with React.js, Node.js, MongoDB, npm, and Bootstrap</li>
                        <li className="abt-li">User authentication feature allows users to register and log in to the site</li>
                        <li className="abt-li">Admin-only post creation feature ensures that only approved content is added to the site</li>
                    </u1>
                    <div className="abt-action">
                        <button className="pj-btn">View site</button>
                        <img src = {github} className='git-logo'/>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Project;