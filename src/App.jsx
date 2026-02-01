import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Overview from './pages/Overview';
import ToolsMaterials from './pages/ToolsMaterials';
import BuildFrame from './pages/BuildFrame';
import BuildBoards from './pages/BuildBoards';
import Options from './pages/Options';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/tools" element={<ToolsMaterials />} />
          <Route path="/build-frame" element={<BuildFrame />} />
          <Route path="/build-boards" element={<BuildBoards />} />
          <Route path="/options" element={<Options />} />
        </Routes>
      </main>
      <footer className="text-center" style={{ padding: '2rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
        &copy; {new Date().getFullYear()} Woodframe Blueprint. DIY made simple.
      </footer>
    </div>
  );
}

export default App;
