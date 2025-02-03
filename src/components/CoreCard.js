import React from 'react';
import './CoreCard.css';

const CoreCard = ({ cores=[],domain }) => {
  return (
    <div className="cardy">
      <div className="card-titley">{domain}</div>
      <div className="card-contenty">
        {cores.map((core, index) => (
          <div className="name-itemy" key={index}>
            <span>{Object.keys(core)[0]}</span>
            <span>{Object.values(core)[0]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreCard;
