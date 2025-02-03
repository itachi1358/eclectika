import React from "react";
import "./TeamCard.css";
import Linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'


const TeamCard = (props) => {
  return (
    <div className="card-container">
      <div className="card1">
        {/* Front Side */}
        <div className="card-front">
        <img src={props.image} alt="Profile" />
        <div className="name-sub-name">
          <h2 className="name">{props.name}</h2>
          <h6 className="sub-name">{props.domain}</h6>
          </div>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <h2 className="name">{props.name}</h2>
          <p className="branch">{props.branch}</p>
          <div className="social-icons">
            <a href={props.insta} className="icon instagram">
              <img src={instagram}/>
            </a>
            <a href={props.ln} className="icon linkedin">
              <img src={Linkedin}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
