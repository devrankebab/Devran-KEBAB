import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import MenuSection from './components/MenuSection';
import Features from './components/Features';
import Location from './components/Location';
import Footer from './components/Footer';
import StickyCall from './components/StickyCall';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Trust />
        <div id="features">
          <Features />
        </div>
        <MenuSection />
        <Location />
      </main>
      <Footer />
      <StickyCall />
    </div>
  );
}

export default App;
