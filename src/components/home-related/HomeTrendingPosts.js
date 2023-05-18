import React from "react";
import "./css/HomeTrendingPosts.css";

import Blogpost from "./sub-components/Blogpost";

const HomeTrendingPosts = () => {
  return (
    <div className="home-trending-posts-container">
      <div data-aos="fade-up">
        <Blogpost />
        <Blogpost />
        <Blogpost />
        <Blogpost />
      </div>
    </div>
  );
};

export default HomeTrendingPosts;
