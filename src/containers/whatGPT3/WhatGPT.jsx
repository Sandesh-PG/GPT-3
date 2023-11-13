import React from "react";
import cardContent from "./whatgptCardContent";
import "./whatgpt.css";

const miniCard = (content) => {
  return (
    <div key={content.key} className="whatgpt-card">
      <div className="whatgpt-card-content">
        <div
          className="whatgpt-bar"
          style={{
            width: "38px",
            height: "3px",
            flexShrink: "0",
            background:
              "linear-gradient(103deg, #AE67FA -13.86%, #F49867 99.55%), #FFF",
          }}
        ></div>
        <h2>{content.cardName}</h2>
        <p className="card-text">{content.cardContent}.</p>
      </div>
    </div>
  );
};

const WhatGPT = () => {
  return (
    <div className="whatgpt-container">
      <div className="whatgpt-section section__padding">
        <div className="whatgpt-section-top">
          <div className="whatgpt-left">
            <div
              className="whatgpt-bar"
              style={{
                width: "38px",
                height: "3px",
                flexShrink: "0",
                background:
                  "linear-gradient(103deg, #AE67FA -13.86%, #F49867 99.55%), #FFF",
              }}
            ></div>
            <h3 className="whatgpt-text">What is GPT3?</h3>
            <h2 className="gradient__text">
              The possibilities are beyond your imagination
            </h2>
          </div>
          <div className="whatgpt-right">
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
        </div>
        <div className="whatgpt-section-bottom">
          {cardContent.map(miniCard)}
        </div>
      </div>
    </div>
  );
};

export default WhatGPT;
