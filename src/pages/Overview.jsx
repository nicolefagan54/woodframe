import React from 'react';

const Overview = () => {
  return (
    <div className="container animate-fade-in">
      <div className="glass-card mb-8">
        <h1>Project Overview</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>
          Build your own DIY wooden queen-size bed frame. A solid, simple, and elegant platform bed.
        </p>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <h3>Project Details</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li className="mb-4"><strong>Skill Level:</strong> Intermediate</li>
              <li className="mb-4"><strong>Time:</strong> 1–2 days (including finishing)</li>
              <li className="mb-4"><strong>Size:</strong> Queen (approx. 60" x 80")</li>
            </ul>
          </div>
          <div style={{ background: 'var(--color-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ marginTop: 0 }}>Why this build?</h3>
            <p>This design uses standard construction lumber for a sturdy frame that looks great with a nice finish. Customizable height and style.</p>
          </div>
        </div>
      </div>

      <div className="glass-card mb-8">
        <h2>Safety & Preparation</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div>
            <h3><span role="img" aria-label="safety">🛡️</span> Safety Gear</h3>
            <ul style={{ paddingLeft: '1.2rem' }}>
              <li><strong>Eye protection:</strong> Safety glasses (always!)</li>
              <li><strong>Hearing protection:</strong> Earplugs or earmuffs</li>
              <li><strong>Dust protection:</strong> Mask or respirator</li>
              <li><strong>Hand protection:</strong> Work gloves</li>
            </ul>
          </div>

          <div>
            <h3><span role="img" aria-label="workspace">🏠</span> Workspace</h3>
            <ul style={{ paddingLeft: '1.2rem' }}>
              <li><strong>Flat surface:</strong> Room to lay out 8ft boards</li>
              <li><strong>Good lighting:</strong> Critical for accurate cuts</li>
              <li><strong>Ventilation:</strong> Essential for sanding/finishing</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '2rem', borderTop: '1px solid var(--color-secondary)', paddingTop: '1.5rem' }}>
          <h3>General Safety Rules</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <span className="badge">Measure twice, cut once</span>
            <span className="badge">Clamp before cutting</span>
            <span className="badge">Unplug when changing bits</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
