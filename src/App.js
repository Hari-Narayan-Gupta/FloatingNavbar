import React from 'react';
import Navbar from './components/FloatingNavbar';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        {/* Dummy content for scrolling */}
        {[...Array(50)].map((_, index) => (
          <p key={index}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
