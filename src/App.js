import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About_us';
import OurTheme from './components/OurTheme';
import Megaevents from './components/Megaevents';
import PastEvents from './components/PastEvents';
import Footer from './components/Footer';
import Merchandise from './components/Merchandise';
import '@fortawesome/fontawesome-free/css/all.min.css';
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
