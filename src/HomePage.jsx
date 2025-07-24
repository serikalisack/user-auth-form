import React from 'react'
import './HomePage.css'



const HomePage = () => {
  return (
    <div>
      <nav className='navbar'>
        <h2 className='logo'>User Auth HomePage</h2>
        <ul className='nav-links'>
          <li> <a href='#home'>Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><button className="logout-btn">Logout</button></li>
        </ul>
      </nav>

      <section id='home' className='section'>
         <h1>Welcome to the Home Section</h1>
        <p>This is the landing area for users after login.</p>
      </section><section id="services" className="section">
        <h1>Our Services</h1>
        <p>Details about what services we provide.</p>
      </section>

      <section id="about" className="section">
        <h1>About Us</h1>
        <p>Information about the organization or application.</p>
      </section>

      <section id="contact" className="section">
        <h1>Contact</h1>
        <p>Ways users can reach out to us.</p>
      </section>
    </div>
  );
};

export default HomePage;