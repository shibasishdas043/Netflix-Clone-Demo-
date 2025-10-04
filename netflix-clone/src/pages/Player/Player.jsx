import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";

const Player = () => {
  const [apiData, setApiData] = useState([{
    name:"", key:"", publlished_at:"", typeof:"",
  }]);


  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGEzYjNjM2M0NTYzOGMxY2Y1MDkyNDJiNDdmZWEyYSIsIm5iZiI6MTc1OTUxMzA4MS43OTMsInN1YiI6IjY4ZTAwOWY5Y2ViZWM1ODZkZjZiODc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zcUCTf6tY_QlRYInSumf3eNzek-G1hyc6468VvAaBRs",
  //   },
  // };

  // useEffect(() => {
  //   fetch(
  //     "https://api.themoviedb.org/3/movie/594767/videos?language=en-US",
  //     options
  //   )
  //     .then((res) => res.json())
  //     .then((res) => console.log(res))
  //     .then((res) => setApiData(res.results[0]))
  //     .catch((err) => console.error(err));
  // }, []);


  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/594767/videos?language=en-US`;

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

  }, []);











  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" />
      <iframe
        width={"90%"}
        height={"90%"}
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.publlished_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  );
};

//youtu.be/FNpV3DQWUf8?si=Pm3yKaKg8qxZ5_xI
export default Player;
