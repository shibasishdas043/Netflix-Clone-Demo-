import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";


const Player = () => {
  const navigate = useNavigate();

  const { id } = useParams();


  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    type: "",
    published_at: "",
  });




  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGEzYjNjM2M0NTYzOGMxY2Y1MDkyNDJiNDdmZWEyYSIsIm5iZiI6MTc1OTUxMzA4MS43OTMsInN1YiI6IjY4ZTAwOWY5Y2ViZWM1ODZkZjZiODc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zcUCTf6tY_QlRYInSumf3eNzek-G1hyc6468VvAaBRs",
    },
  };


  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
    
  }, []);


  const prevPage = () => {
    navigate("/");
  }

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={() => prevPage()} />
      <iframe
        width={"90%"}
        height={"90%"}
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

//youtu.be/FNpV3DQWUf8?si=Pm3yKaKg8qxZ5_xI
export default Player;
