import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import NetworkSection from './components/NetworkSection';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <Hero />
      <Features />
      <NetworkSection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;