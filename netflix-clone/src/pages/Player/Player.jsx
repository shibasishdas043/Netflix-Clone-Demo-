import React from 'react'
import "./Player.css"
import back_arrow_icon from "../../assets/back_arrow_icon.png";


const Player = () => {
  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" />
      <iframe
        width={"90%"}
        height={"90%"}
        src={
          "https://www.youtube.com/embed/FNpV3DQWUf8"
        }
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>Public Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  );
}


//youtu.be/FNpV3DQWUf8?si=Pm3yKaKg8qxZ5_xI
 export default Player;