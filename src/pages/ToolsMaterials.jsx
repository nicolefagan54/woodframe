import React from 'react';
import { projectData } from '../data/projectData';

const ToolsMaterials = () => {
  const { tools, materials } = projectData.toolsAndMaterials;

  return (
    <div className="container animate-fade-in">
      <h1 className="text-center mb-8">Tools & Materials</h1>
      
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        
        {/* Tools Section */}
        <div className="glass-card">
          <h2><span role="img" aria-label="tools">🛠️</span> Tools Needed</h2>
          <div className="mb-4">
            <h3>Measuring & Marking</h3>
            <ul>
              {tools.measuring.map((tool, i) => <li key={i}>{tool}</li>)}
            </ul>
          </div>
          <div className="mb-4">
            <h3>Cutting</h3>
            <ul>
              {tools.cutting.map((tool, i) => <li key={i}>{tool}</li>)}
            </ul>
          </div>
          <div className="mb-4">
            <h3>Drilling & Fastening</h3>
            <ul>
              {tools.drilling.map((tool, i) => <li key={i}>{tool}</li>)}
            </ul>
          </div>
          <div>
            <h3>Finishing</h3>
            <ul>
               {tools.finishing.map((tool, i) => <li key={i}>{tool}</li>)}
            </ul>
          </div>
        </div>

        {/* Materials Section */}
        <div className="glass-card">
          <h2><span role="img" aria-label="wood">🪵</span> Materials</h2>
          <p className="mb-4 text-muted" style={{ fontStyle: 'italic' }}>Based on a typical queen platform frame.</p>
          
          <div className="mb-4">
            <h3>Lumber</h3>
            <ul>
              {materials.lumber.map((item, index) => (
                <li key={index}>
                  <strong>{item.name}:</strong> {item.count} × ({item.size} × {item.length})
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Fasteners & Supplies</h3>
            <ul>
              {materials.fasteners.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>

      </div>

      {/* Cut List Section */}
      <div className="glass-card" style={{ marginTop: '2rem', borderLeft: '4px solid var(--color-primary)' }}>
        <h2><span role="img" aria-label="ruler">📏</span> Cut List Reference</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
           {materials.lumber.map((item, index) => (
            <div key={index}>
              <h4>{item.name}</h4>
              <p>{item.count} × {item.size} × <strong>{item.length}</strong></p>
            </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsMaterials;
