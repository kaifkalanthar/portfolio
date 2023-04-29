import React from 'react';

const TechStack = () => {
    const tech = ["React.js", "TypeScript", "JavaScript", "Sass", "React-Router", "MySql", "MongoDB", "Canva", "Figma", "Pandas", "Numpy", "Scikit-Learn", "SciPy", "Postman", "Portfolio", "Babel","C", "C++", "HTML5", "Java", "PHP", "Python", "Render", "Netlify", "Jwt", "BootStrap", "Git&Github"]
    return ( 
        <div className="stack-container">
            <h1 className="stack-header">Tech-Stack</h1>
            <div>
                {tech.map(t => (
                     <span key={t}>{t}</span>
                ))}
            </div>
        </div>
     );
}
 
export default TechStack;