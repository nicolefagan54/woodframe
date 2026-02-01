import React from 'react';

const ToolsMaterials = () => {
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
              <li>Tape measure</li>
              <li>Carpenter’s pencil</li>
              <li>Square</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3>Cutting</h3>
            <ul>
              <li>Circular saw or miter saw</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3>Drilling & Fastening</h3>
            <ul>
              <li>Drill/driver & bits</li>
              <li>Screwdriver bits</li>
              <li>Pocket-hole jig (optional)</li>
            </ul>
          </div>
          <div>
            <h3>Finishing</h3>
            <ul>
              <li>Orbital sander (sandpaper: 80, 120, 220)</li>
              <li>Brushes/rags for stain</li>
              <li>Clamps (bar or C-clamps)</li>
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
              <li><strong>Side rails:</strong> 2 × (1" × 10" × 80 ½")</li>
              <li><strong>Head/Foot rails:</strong> 2 × (1" × 10" × 60 ½"–62 ½")</li>
              <li><strong>Inner frame:</strong> 2 × (2" × 4" × ~80 ¾")</li>
              <li><strong>Center support:</strong> 1 × (2" × 4" × ~60 ½")</li>
              <li><strong>Slats:</strong> 4–6 × (2" × 4" × ~60 ½")</li>
              <li><strong>Legs:</strong> 4 × (4" × 4" posts, 10"–14" long)</li>
            </ul>
          </div>

          <div>
            <h3>Fasteners & Supplies</h3>
            <ul>
              <li>Wood screws (2 ½" and 3")</li>
              <li>Pocket-hole screws (if using jig)</li>
              <li>Wood glue</li>
              <li>Wood filler (optional)</li>
              <li>Stain/paint + Polyurethane</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Cut List Section */}
      <div className="glass-card" style={{ marginTop: '2rem', borderLeft: '4px solid var(--color-primary)' }}>
        <h2><span role="img" aria-label="ruler">📏</span> Cut List (Example)</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div>
            <h4>Side Boards</h4>
            <p>2 × 1" × 10" × <strong>80 ½"</strong></p>
          </div>
          <div>
            <h4>Head/Foot Boards</h4>
            <p>2 × 1" × 10" × <strong>60 ½"–62 ½"</strong></p>
          </div>
          <div>
            <h4>Frame Members (Long)</h4>
            <p>2 × 2" × 4" × <strong>80 ¾"</strong></p>
          </div>
          <div>
            <h4>Legs</h4>
            <p>4 × 4" × 4" × <strong>12"</strong> (or preferred height)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsMaterials;
