import React from 'react';
import './App.scss';
import NavBar from './component/navBar';
import HeroSection from './component/heroSection';
import Project from './component/project';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <HeroSection />
      <Project />
    </React.Fragment>
  );
}

export default App;
