import React from 'react';
import './Sponsors.css';
import ec_logo from '../assets/eclectika_img.jpg'
import zeeshan from '../assets/zeeshan.jpg'
import htx from '../assets/hair_trim_x.jpg'
import gagan from '../assets/gagan.jpg'
import darshan from '../assets/darshan_library.jpg'
import annapurna from '../assets/annapurna.jpg'
import abc from '../assets/abc.jpg'
import sjain from '../assets/sjain.jpeg'
import { Link } from 'react-router-dom';
export default function Sponsors() {
  return (
    <div>
      <h1 className="title">Sponsors</h1>
      <div className="spons-container">
      <div className="sponsors">
        <img src={ec_logo} alt="Sponsor 1"/>

        <Link to='https://sjain.io/'>
        <img src={sjain} alt="sponsor 8"/>
        </Link>
        <img src={zeeshan} alt="Sponsor 2"/>

        <img src={htx} alt="Sponsor 3"/>
        <img src={gagan} alt="Sponsor 4"/>
        <img src={darshan} alt="Sponsor 5"/>
        <img src={annapurna} alt="Sponsor 6"/>
        <img src={abc} alt="Sponsor 7"/>

        </div>
      </div>
    </div>
  );
}
