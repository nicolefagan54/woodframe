import React from 'react';

const BuildBoards = () => {
  return (
    <div className="container animate-fade-in">
      <h1 className="text-center mb-8">Phase 2: Boards & Finishing</h1>
      
      <div className="glass-card mb-8">
        <h2>Step 5: Add Boards</h2>
        <p>These make the frame look finished and keep the mattress in place.</p>
        <div className="grid border-l-4 border-primary pl-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div>
            <h3>Attach Side Boards</h3>
            <p>Clamp side board to outside of frame (top edge slightly above slats). Pre-drill and screw from inside frame.</p>
          </div>
          <div>
            <h3>Attach Head/Foot Boards</h3>
            <p>Position between or outside side boards. Check square, glue, and screw.</p>
          </div>
        </div>
      </div>

      <div className="glass-card mb-8">
        <h2>Step 6: Sanding</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="text-center" style={{ flex: 1, background: '#fff', padding: '1rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
            <h3>80 Grit</h3>
            <p className="text-muted">Rough sanding. Remove saw marks.</p>
          </div>
          <div className="text-center" style={{ flex: 1, background: '#fff', padding: '1rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
            <h3>120 Grit</h3>
            <p className="text-muted">Medium. Smooth surfaces.</p>
          </div>
          <div className="text-center" style={{ flex: 1, background: '#fff', padding: '1rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
            <h3>220 Grit</h3>
            <p className="text-muted">Fine. Prepare for finish.</p>
          </div>
        </div>
      </div>

      <div className="glass-card mb-8">
        <h2>Step 7: Finishing</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li className="mb-4"><strong>Clean:</strong> Vacuum or wipe with tack cloth.</li>
          <li className="mb-4"><strong>Stain/Paint:</strong> Follow instructions. Wipe excess stain after a few minutes.</li>
          <li className="mb-4"><strong>Dry:</strong> Let dry fully per can instructions.</li>
          <li><strong>Clear Coat:</strong> Apply polyurethane for durability.</li>
        </ol>
      </div>

      <div className="glass-card">
        <h2>Step 8: Final Assembly</h2>
        <p>Move frame to bedroom (protect floors!). Check stability and tighten loose screws. Place mattress on top!</p>
      </div>

    </div>
  );
};

export default BuildBoards;
