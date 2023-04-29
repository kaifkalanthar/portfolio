import React from 'react';
import git from '../external/git.svg';
import linkedin from '../external/linkedin.svg';
import twitter from '../external/twitter.svg';
import hackerrank from '../external/hackerrank.svg';
import figma from '../external/figma.svg';

const Socials = () => {
    return ( 
        <div className="socials">
            <h1 className="socials-header">Socials</h1>
            <div>
            <a href="https://github.com/kaifkalanthar"><img src={git} alt="" /></a>
            <a href="https://www.linkedin.com/in/mohamed-kaif-057781212/"><img src={linkedin} alt="" /></a>
            <a href="https://twitter.com/Kaif26Mhd?t=RIp1cFC76Hun1-sBM_t-og&s=08"><img src={twitter} alt="" /></a>
            <a href="https://www.hackerrank.com/kaifkalanthar"><img src={hackerrank} alt="" /></a>
            <a href="https://www.figma.com/files/user/972022517383592548?fuid=972022517383592548"><img src={figma} alt="" /></a>
            </div>
        </div>
     );
}
 
export default Socials;