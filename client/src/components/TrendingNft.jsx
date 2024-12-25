import React from "react";
import "./TrendingNft.css";
import nft from "../assets/images/nft/nft-1.svg";
const TrendingNft = () => {
  return (
    <div className="trending-nft">
      <div className="trending-nft-container">
        <div className="trending-nft-img">
          <img src={nft} />

          <p>Art name</p>
        </div>
        <div>
          <div className="nft-artist-info">
            <div className="nft-artist-profile">
              <span className="artist-profile-img">
                <img src={nft} />
              </span>
              <p>Artist Name</p>
            </div>
            <div className="trending-nft-divider"></div>
            <div>
              <div>
                <span>Logo</span>
                <span>Amount</span>
                <span>ETH</span>
                <p>Gas Fee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNft;
