import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
// import axios from "axios";

const TitleCards = ({ title, catagory }) => {
  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGEzYjNjM2M0NTYzOGMxY2Y1MDkyNDJiNDdmZWEyYSIsIm5iZiI6MTc1OTUxMzA4MS43OTMsInN1YiI6IjY4ZTAwOWY5Y2ViZWM1ODZkZjZiODc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zcUCTf6tY_QlRYInSumf3eNzek-G1hyc6468VvAaBRs",
    },
  };

  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => console.log(res.results))
      .then((res) => setApiData([res.results]))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
