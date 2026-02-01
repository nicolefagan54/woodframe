import React from 'react';
import { NavLink } from 'react-router-dom';
import { projectData } from '../data/projectData';

const Options = () => {
  const { headboard, tips } = projectData.options;

  return (
    <div className="container animate-fade-in">
      <h1 className="text-center mb-8">Options & Notes</h1>
      
      <div className="glass-card mb-8">
        <h2><span role="img" aria-label="plus">➕</span> {headboard.title}</h2>
        <p>{headboard.description}</p>
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
          {tips.map((tip, index) => (
            <div key={index}>
              <h3>{tip.title}</h3>
              <p>{tip.content}</p>
            </div>
          ))}
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
