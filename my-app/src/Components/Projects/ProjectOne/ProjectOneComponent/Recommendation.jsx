import React from "react";
import { SMALL_IMG_COVER_BASE_URL } from "../config/UrlConstant";

export default function Recommendation({ recommendationList, onClick_item }) {
  const titleLen = 20;
  const itemSelected = () => {
    onClick_item(recommendationList);
  };
  return (
    <React.Fragment>
      <div className="recommend_container" onClick={itemSelected}>
        <div className="recommend_img">
          <img
            src={SMALL_IMG_COVER_BASE_URL + recommendationList.backdrop_path}
            alt="recommendationList.name"
          ></img>
        </div>
        <div className="recommend_title_box">
          <div className="title_text">
            {" "}
            {recommendationList.name.length > titleLen
              ? recommendationList.name.slice(0, titleLen) + " ...."
              : recommendationList.name}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}