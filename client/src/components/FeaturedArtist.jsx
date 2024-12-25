import React from "react";
import "./FeaturedArtist.css";
import nft from "../assets/images/nft/nft-1.svg";
const FeaturedArtist = () => {
  return (
    <div>
      <div className="featured-artist-cotainer">
        <div className="featured-artist-frame">
          <div className="featured-artist-img">
            <img src={nft} />
          </div>
        </div>
        <div className="featured-artist-info">
          <p>Name</p>
          <button>View</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtist;
