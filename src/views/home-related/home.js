import React from "react";
import "./css/home.css";
import {Link} from 'react-router-dom'

// Import statements of needed common components
import Navbar from "../../components/common/navbar/Navbar";
import LongFooter from "../../components/common/footer/LongFooter";

import HomeIntro from "../../components/home-related/HomeIntro";
import HomeMarketsTable from "../../components/home-related/HomeMarketsTable";
import HomeWhyBigCoinance from "../../components/home-related/HomeWhyBigCoinance";
import HomeTrendingPosts from "../../components/home-related/HomeTrendingPosts";
import HomeFAQ from "../../components/home-related/HomeFAQ";
const Home = () => {
  
  return (
    <div className="home-container">
      <Navbar theme="dark" />

      <section ><HomeIntro /></section>

      {/* <div className="home-content-container" >
        <div className="home-markets-table-container">
          <p className="home-title">بازارها</p>

          <div className="overflow-it">
            <HomeMarketsTable />
          </div>
          <Link className="btn btn-primary-gradient mt-2 d-block" to="#"> مشاهده تمامی بازارها</Link>
        </div>
      </div> */}

      <section><HomeWhyBigCoinance /></section>

      <section ><HomeTrendingPosts /></section>

      <section><HomeFAQ /></section>

      <section ><LongFooter /></section>
    </div>
  );
};

export default Home;
