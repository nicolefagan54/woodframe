import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const navItems = [
    { name: 'Overview', path: '/' },
    { name: 'Tools & Materials', path: '/tools' },
    { name: 'Frame & Legs', path: '/build-frame' },
    { name: 'Boards & Finishing', path: '/build-boards' },
    { name: 'Options', path: '/options' },
  ];

  return (
    <nav style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--color-secondary)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
        <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', color: 'var(--color-primary-dark)', fontWeight: 'bold' }}>
          Woodframe Blueprint
        </div>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink 
                to={item.path}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--color-primary-dark)' : 'var(--color-text-muted)',
                  fontWeight: isActive ? 600 : 400,
                  borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                  paddingBottom: '4px',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                })}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
