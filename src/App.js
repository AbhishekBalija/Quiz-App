import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Java from './pages/Java';
import Python from './pages/Python';
import Html from './pages/Html';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/java" element={<Java />} />
        <Route path="/python" element={<Python />} />
        <Route path="/html" element={<Html />} />
      </Routes>
    </Router>
  );
}

export default App;