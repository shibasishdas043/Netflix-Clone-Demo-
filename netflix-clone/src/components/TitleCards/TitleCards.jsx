import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
// import axios from "axios";

const TitleCards = ({ title, topic, catagory }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/${topic}/${catagory}?language=en-US&page=1`;

    const run = async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGEzYjNjM2M0NTYzOGMxY2Y1MDkyNDJiNDdmZWEyYSIsIm5iZiI6MTc1OTUxMzA4MS43OTMsInN1YiI6IjY4ZTAwOWY5Y2ViZWM1ODZkZjZiODc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zcUCTf6tY_QlRYInSumf3eNzek-G1hyc6468VvAaBRs",
          },
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        console.log(data.results);
        setApiData([...data.results]);
      } catch (err) {
        console.error(err);
      }
    };

    run();

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.poster_path} alt="" />
              <p>{card.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
