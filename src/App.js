import React from 'react';
import './App.css';

import Merchandise from './components/Merchandise';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home'
import Team from './components/Team';
function App() {


  return (
    
    <div className="App">
    <Router>
    <Routes>
    
    <Route path="/" element={<Home/>} />
    <Route path="/team" element={<Team/>} />
    <Route path="/Merch" element={<Merchandise/>} />

    </Routes>
    </Router>
    </div>
  );
}

export default App;
