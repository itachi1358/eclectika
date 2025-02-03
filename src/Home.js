import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About_us';
import OurTheme from './components/OurTheme';
import Megaevents from './components/Megaevents';
import PastEvents from './components/PastEvents';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sponsors from './components/Sponsors';

function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Define the target date (7th Feb 2025 12:00 AM)
    let targetDate = new Date('2025-02-07T00:00:00');

    // Check if a target date is already stored in localStorage
    const storedTargetDate = localStorage.getItem('targetDate');

    // If no target date is stored, save the target date to localStorage
    if (!storedTargetDate) {
      localStorage.setItem('targetDate', targetDate.toISOString());
    } else {
      // If a target date is stored, use it instead of the hardcoded one
      targetDate = new Date(storedTargetDate);
    }

    // Update countdown every second
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="App">
      {/* Background for the entire application */}
      <div className="background"></div>

      <Header />

      {/* Main Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Eclectika'<span className="x25">25</span></h1>
          <p>The Central India's Largest Fest</p>
        </div>
        <div className="countdown-timer">
          <p>
            {timeLeft.days} Days : {timeLeft.hours} Hours : {timeLeft.minutes} Minutes : {timeLeft.seconds} Seconds left
          </p>
        </div>
      </div>

      <section id="about"><About /></section>
      <section id="ourtheme"><OurTheme /></section>
      <section id="events"><Megaevents /></section>
      <section id="gallery"><PastEvents /></section>
      <section id="sponsors"><Sponsors /></section>
      <section id="contact"><Footer /></section>
    </div>
  );
}

export default App;