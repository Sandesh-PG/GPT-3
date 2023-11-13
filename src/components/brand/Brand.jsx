import React from "react";
import { atlassian, dropbox, google, shopify, slack } from "../../assets";
import "./Brand.css";

const Brand = () => {
  return (
    <div className="brand-holder">
      <div className="brand-img-holder flex flex-wrap justify-center items-center gap-4">
        <img
          style={{ width: "71px", height: "24px" }}
          className="brand-img"
          src={google}
          alt="google"
        />
        <img
          style={{ width: "95px", height: "24px" }}
          className="brand-img"
          src={slack}
          alt="slack"
        />
        <img
          style={{ width: "112px", height: "24px" }}
          className="brand-img"
          src={atlassian}
          alt="atlassian"
        />
        <img
          style={{ width: "120px", height: "24px" }}
          className="brand-img"
          src={dropbox}
          alt="dropbox"
        />

        <img
          style={{ width: "84px", height: "24px" }}
          className="brand-img"
          src={shopify}
          alt="shopify"
        />
      </div>
    </div>
  );
};

export default Brand;
