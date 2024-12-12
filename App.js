import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="App">
      <h1>Interactive Art Gallery</h1>
      <button onClick={toggleTheme} style={{ margin: '20px' }}>
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Theme
      </button>
      <Gallery />
    </div>
  );
}

export default App;

