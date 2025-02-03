import React from 'react';
import './PasteventCard.css'; // Import styles specific to the card

export default function PastEventCard({ title, backgroundImage,year }) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition:`centre`
      }}
    >
      <div className="card-content">
        <div className="content">
          <h2>{title}</h2>
          <h6>{year}</h6>
        </div>
      </div>
    </div>
  );
}
