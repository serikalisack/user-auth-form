import React from 'react';

const Navbar = ({ setActiveSection }) => {
  return (
    <nav style={styles.nav}>
      <span style={styles.title}>MyDashboard</span>
      <ul style={styles.ul}>
        <li onClick={() => setActiveSection('home')}>Home</li>
        <li onClick={() => setActiveSection('services')}>Services</li>
        <li onClick={() => setActiveSection('about')}>About</li>
        <li onClick={() => setActiveSection('contact')}>Contact</li>
        <li style={styles.logout}>Logout</li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: '#007bff',
    color: '#fff'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.2rem'
  },
  ul: {
    display: 'flex',
    gap: '1rem',
    listStyle: 'none',
    cursor: 'pointer',
    margin: 0
  },
  logout: {
    marginLeft: '2rem',
    color: '#ffdddd'
  }
};

export default Navbar;
