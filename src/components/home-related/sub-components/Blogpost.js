import React from "react";
import "./css/Blogpost.css";

import images from "../../../utils/images";
import icons from "../../../utils/icons";

const Blogpost = () => {
  return (
    <div className="blogpost-container">
      <p>اخبار</p>

      <img alt="Blogpost" src={images.others.blogpost} />

      <p className="blogpost-content">ارزش بیت‌کوین تا آخر ژوئن به بالاترین میزان خود خواهد رسید.</p>

      <div>
        <p>۱۱ آذر</p>

        <div>
          <p>۱۲</p>
          <img alt="Heart" src={icons.others.heart} />
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
