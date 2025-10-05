import React, { useEffect } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";


const Home = () => {


  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Discovering His Eyes To secretely Ancient Order, A Young Man Living
            In Modern Day Life
          </p>
          <div className="hero-btn">
            <button className="btn">
              <img src={play_icon} alt="play_icon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="info_icon" />
              More Info
            </button>
          </div>
          <TitleCards
            title={"Populer On Netflix"}
            topic={"movie"}
            catagory={"now_playing"}
          />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards //movie
          title={"Blockbuster Movies"}
          topic={"movie"}
          catagory={"now_playing"}
        />
        <TitleCards title={"Populer"} topic={"tv"} catagory={"popular"} />
        <TitleCards //movie
          title={"Top Rated"}
          topic={"movie"}
          catagory={"top_rated"}
        />
        <TitleCards
          title={"Airing Today"}
          topic={"tv"}
          catagory={"airing_today"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
