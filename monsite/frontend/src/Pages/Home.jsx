import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // On va y mettre les styles cyberpunk

const Home = () => {
  return (
    <div className="home-container">
      <div className="neon-title">CyberShop IPSSI</div>

      <p className="home-subtitle">
        Entrez dans le futur du commerce. Découvrez des produits technologiques,
        artistiques et futuristes 💫
      </p>

      <Link to="/catalogue" className="neon-button">
        Explorer le catalogue
      </Link>

      <div className="neon-bg">
        <div className="circle purple"></div>
        <div className="circle green"></div>
        <div className="circle yellow"></div>
      </div>
    </div>
  );
};

export default Home;
