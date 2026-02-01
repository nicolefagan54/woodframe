import React from 'react';

const BuildFrame = () => {
  return (
    <div className="container animate-fade-in">
      <h1 className="text-center mb-8">Phase 1: Frame & Legs</h1>
      
      <div className="glass-card mb-8">
        <h2>Step 1: Measure and Plan</h2>
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h3><span className="badge">1</span> Confirm Mattress Size</h3>
            <p>Measure your actual mattress (length, width, thickness). Standard Queen is ~60" x 80".</p>
          </div>
          <div>
            <h3><span className="badge">2</span> Decide Style & Height</h3>
            <p><strong>Platform vs Box Spring:</strong> Decide if mattress sits on slats or if frame supports a box spring.</p>
            <p><strong>Height:</strong> Add Leg Height + Frame Thickness + Mattress Thickness.</p>
          </div>
        </div>
      </div>

      <div className="glass-card mb-8">
        <h2>Step 2: Cut All Lumber</h2>
        <p>Use a square to ensure straight cuts.</p>
        <ul style={{ background: 'rgba(255,255,255,0.5)', padding: '1rem 2rem', borderRadius: 'var(--radius-md)' }}>
          <li><strong>Side & Head/Foot boards:</strong> Cut to lengths in cut list.</li>
          <li><strong>Inner Frame:</strong> Cut long members, center member, and slats.</li>
          <li><strong>Legs:</strong> Ensure all logs are <em>exactly</em> the same length to prevent rocking.</li>
        </ul>
      </div>

      <div className="glass-card mb-8">
        <h2>Step 3: Build Inner Support Frame</h2>
        <p>This "skeleton" carries the weight.</p>
        <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li><strong>Lay out:</strong> Place two long 2x4s parallel (mattress width apart).</li>
          <li><strong>Add Center:</strong> Position center cross member. Check for square by measuring diagonals.</li>
          <li><strong>Attach:</strong> Pre-drill, glue, and drive 3" screws through long members into cross member ends.</li>
          <li><strong>Add Slats:</strong> Space evenly (6"–8" apart) and screw into long frame members.</li>
        </ol>
      </div>

      <div className="glass-card">
        <h2>Step 4: Attach Legs</h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1 }}>
            <h3>Corner Legs</h3>
            <p>Stand frame on side/upside down. Place one leg at each corner, flush with outer edges. Use <strong>glue and 3" screws</strong> (at least 2 per side).</p>
          </div>
          <div style={{ flex: 1, borderLeft: '1px solid var(--color-secondary)', paddingLeft: '2rem' }}>
            <h3>Center Support</h3>
            <p>For extra strength, add 1-2 legs under the center cross member.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BuildFrame;
