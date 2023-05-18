import React from "react";
import "./css/HomeIntro.css";
import { Link } from "react-router-dom";

import HomeFeesSection from "./HomeFeesSection";
import Particles from "react-tsparticles";
import images from "../../utils/images";

const HomeIntro = () => {
  const particlesInit = (main) => {};

  const particlesLoaded = (container) => {};
  return (
    <div className="home-intro-container">
      <div className="">
      <Particles
       className="home-intro-background"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          background: {
            color: "#102030"
          },
          backgroundMode: {
            enable: true
          },
          particles: {
            color: {
              value: ["#f67e7d55", "#843b6255", "#62194055"]
            },
            number: { density: { enable: true, value_area: 800 }, value: 80 },
            links: {
              color: "#ffb99722",
              enable: true,
              opacity: 0.25,
            },
            move: {
              enable: true,
              speed: 1
            },
            size: {
              value: 2,
              random: {
                enable: false,
                minimumValue: 1,
              },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 1
              }
            },
            opacity: {
              value: 0.02,
              
            }
          }
      }}
      />
      </div>

      <div className="home-intro-top-section" data-aos="fade-up">
        <div >
          <p className="first-paragraph">معاملات امن و راحت با TetherRial</p>

          <p className="second-paragraph">
            صرافی تترریال پلتفرم سریع و ایمن معاملات ارز دیجیتال
          </p>

          <Link to="/exchange" className="btn btn-primary-gradient">شروع معامله</Link>
        </div>

        <img alt="Big Coinance" src={images.others.bigCoinance} />
      </div>

      <HomeFeesSection />

      <div className="home-slider-conteiner">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default HomeIntro;
