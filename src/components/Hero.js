import React from "react";
// Images
import main2 from "../images/main2.jpg";
import main1 from "../images/main1.png";
import main3 from "../images/main3.jpg";


import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/fa/facebook";
import { instagram } from "react-icons-kit/fa/instagram";
import { pinterestP } from "react-icons-kit/fa/pinterestP";
import { linkedin } from "react-icons-kit/fa/linkedin";


export default function Hero() {
  return (
    <section id="hero-section" className="hero-container text-light">
      <div className="container justify-content-center align-items-center">
        <div className="row" style={{ marginTop: "6em" }}>
          <div className="col-12 col-md-6 ml-sm-5">
            <div className="h4 mt-md-5">KeshariTimes</div>
            <hr className="hr-5" />
            <div
              className="h1 mt-md-5 mb-md-4"
              style={{ lineHeight: "1.45em", wordSpacing: "0.1em" }}
            >
              introduction of{" "}
              <span style={{ fontWeight: "bold" }}>Blockchain And Bitcoin</span>
            </div>
            <div className="p mt-3 mb-md-4">
            Blockchain is the technology that enables the existence of cryptocurrency (among other things). Bitcoin is the name of the best-known cryptocurrency, the one for which blockchain technology was invented.
            </div>
         
          </div>
           {/* carousel */}
          <div className="col-10 col-sm-12 col-md-5 mt-5 mt-md-0 text-center">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={main1} alt="Bitcoin" width="400rem" />
                </div>
                <div className="carousel-item">
                  <img src={main2} alt="Blockchain" width="400rem" />
                </div>
                <div className="carousel-item">
                  <img src={main3} alt="Bitcoins and Blockchain " width="400rem" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-block icons-container"
            style={{ marginTop: "-25em" }}
          >
            <a href="https://facebook.com" >
              <Icon size={32} icon={facebook} className="d-block mt-4" />
            </a>
            <a href="https://instagram.com" >
              <Icon size={32} icon={instagram} className="d-block mt-4" />
            </a>
            <a href="https://pinterest.com" >
              <Icon size={32} icon={pinterestP} className="d-block mt-4" />
            </a>
            <a href="https://linkedin.com" >
              <Icon size={32} icon={linkedin} className="d-block mt-4" />
            </a>
          </div>
        </div>
     
      </div>
    </section>
  );
}
