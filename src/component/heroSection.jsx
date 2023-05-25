import React from 'react';
import hero from '../external/heroimage.svg';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';

const HeroSection = () => {
    return (
        <div className="herosection">
            <div className="herosection-content">
                <h1 className="hs-header">I'm <span className='animation'>Mohamed Kaif</span><br /><span className="hs-subheader">Front-end Developer</span></h1>
                <p className="hs-content">I am passionate about becoming a
                    software developer and believe that good software can make
                    the world a better place. I am a self-learner
                    and always enthusiastic to learn new things.</p>
                <Link to='project' spy={true} smooth={true} duration={200} >
                <button className='button'>Projects</button>
                </Link>

            </div>
            <img className='hero-image' src={hero} alt="" />
        </div>
    );
}

export default HeroSection;