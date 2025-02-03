import React from 'react';
import './PastEvents.css';
import PastEventCard from './PastEventCard';
import yuhani from '../assets/yuhani23.jpg'
import sachin from '../assets/sachin17.jpg';
import darshan from '../assets/darshan20.jpg';
import salim from '../assets/salim18.jpg';
import mohit from '../assets/mohit16.jpg';
import yaseerdesai from '../assets/yaseer_desai.png'
export default function PastEvents() {
  return (
    <div>
      <div className="title">
        <h1>Past Events</h1>
      </div>
      <div className="card-container2">
      <PastEventCard backgroundImage={yaseerdesai} title='Yaseer Desai' year='2024'/>
        <PastEventCard backgroundImage={yuhani} title='Yuhani' year='2023'/>
        <PastEventCard backgroundImage={darshan} title='Darshan Raval' year='2020'/>
        <PastEventCard backgroundImage={salim} title='Salim Sulaiman' year='2018'/>
        <PastEventCard backgroundImage={sachin} title='Sachin Jigar' year='2017'/>
        <PastEventCard backgroundImage={mohit} title='Mohit Chauhan' year='2016'/>

      </div>
    </div>
  );
}
