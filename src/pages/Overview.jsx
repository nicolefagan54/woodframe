import React from 'react';
import { projectData } from '../data/projectData';

const Overview = () => {
  const { project, safety } = projectData;

  return (
    <div className="container animate-fade-in">
      <div className="glass-card mb-8">
        <h1>{project.title}</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>
          {project.summary}
        </p>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <h3>Project Details</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {project.details.map((detail, index) => (
                <li key={index} className="mb-4"><strong>{detail.label}:</strong> {detail.value}</li>
              ))}
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
              {safety.gear.map((item, index) => (
                <li key={index}><strong>{item.item}:</strong> {item.detail}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3><span role="img" aria-label="workspace">🏠</span> Workspace</h3>
            <ul style={{ paddingLeft: '1.2rem' }}>
              {safety.workspace.map((item, index) => (
                <li key={index}><strong>{item.item}:</strong> {item.detail}</li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '2rem', borderTop: '1px solid var(--color-secondary)', paddingTop: '1.5rem' }}>
          <h3>General Safety Rules</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {safety.rules.map((rule, index) => (
              <span key={index} className="badge">{rule}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
