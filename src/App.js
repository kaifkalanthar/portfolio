import React from 'react';
import './App.scss';
import NavBar from './component/navBar';
import HeroSection from './component/heroSection';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <HeroSection />
    </React.Fragment>
  );
}

export default App;
