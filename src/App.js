import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import StoreListings from './components/StoreListings';

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <StoreListings />
    </div>
  );
};

export default App;

