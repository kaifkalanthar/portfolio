import React from 'react';
import './App.scss';
import NavBar from './component/navBar';
import HeroSection from './component/heroSection';
import Project from './component/project';
import TechStack from './component/techStack';
import Socials from './component/socials';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <HeroSection />
      <TechStack/>
      <Project />
      <Socials/>
    </React.Fragment>
  );
}

export default App;
