import React from 'react';
import { NavLink } from 'react-router-dom';

const Options = () => {
  return (
    <div className="container animate-fade-in">
      <h1 className="text-center mb-8">Options & Notes</h1>
      
      <div className="glass-card mb-8">
        <h2><span role="img" aria-label="plus">➕</span> Optional: Add a Headboard</h2>
        <p>You can build a separate headboard and bolt it to the frame or mount it to the wall.</p>
        <div style={{ padding: '1.5rem', background: '#f8f4f0', borderRadius: 'var(--radius-md)', marginTop: '1rem' }}>
          <h4>Panel Style</h4>
          <p>Wide vertical or horizontal boards glued and screwed together.</p>
          <h4>Attachment</h4>
          <p>Bolts through the frame into headboard legs, or French cleat on the wall.</p>
        </div>
      </div>

      <div className="glass-card mb-8">
        <h2>Pro Tips</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <h3>Pre-drilling</h3>
            <p>Always pre-drill holes near ends of boards to prevent splitting.</p>
          </div>
          <div>
            <h3>Squareness</h3>
            <p>Check diagonals frequently. If they match, your frame is square.</p>
          </div>
          <div>
            <h3>Wood Selection</h3>
            <p>Sight down boards at the store to ensure they are straight and flat.</p>
          </div>
        </div>
      </div>

      <div className="text-center" style={{ marginTop: '4rem' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Ready to start building?</p>
        <NavLink to="/tools" className="btn">Get Materials List</NavLink>
      </div>

    </div>
  );
};

export default Options;
