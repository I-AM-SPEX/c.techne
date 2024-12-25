import React from "react";
import Navbar from "../components/Navbar";
import "./HomePage.css";
import TrendingNft from "../components/TrendingNft";
import FeaturedArtist from "../components/FeaturedArtist";
const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="hero-section">
        <div className="hero-container">
          <div className="col-one">
            <div className="hero-info">
              <h1>Empowering Local Creativity Through NFTs</h1>
              <p>
                Discover and trade unique artwork from talented local artists in
                a decentralized marketplace.
              </p>
              <button>Sign Up</button>
            </div>
          </div>
          <div className="col-two">
            <div className="trending-nfts-section">
              <p>Trending NFTS</p>
              <TrendingNft />
              <p>You must have funds in your wallet for gas fee.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-artists-section">
        <div className="featured-artists-container">
          <h2>Featured Artists</h2>
          <div className="featured-artists-grid">
            <FeaturedArtist />
            <FeaturedArtist />
            <FeaturedArtist />
            <FeaturedArtist />
            <FeaturedArtist />
            <FeaturedArtist />
            <FeaturedArtist />
            <FeaturedArtist />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
