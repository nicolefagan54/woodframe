import React from 'react';
import { projectData } from '../data/projectData';

const BuildBoards = () => {
  const phaseData = projectData.buildSteps.find(step => step.phase === 2);

  return (
    <div className="container animate-fade-in">
      <h1 className="text-center mb-8">Phase 2: {phaseData.title}</h1>
      
      {phaseData.steps.map((step) => (
        <div key={step.id} className="glass-card mb-8">
          <h2>Step {step.id}: {step.title}</h2>
          <p>{step.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BuildBoards;
