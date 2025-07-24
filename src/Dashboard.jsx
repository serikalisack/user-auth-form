import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setActiveSection={setActiveSection} />
      <div style={{ padding: '1rem' }}>
        {renderSection()}
      </div>
    </div>
  );
};

export default Dashboard;
