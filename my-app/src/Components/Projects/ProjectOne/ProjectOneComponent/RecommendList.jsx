import React from "react";
import Recommendation from "./Recommendation";
import { TfiAngleRight } from "react-icons/tfi";
import Spinner from "react-bootstrap/Spinner";

export default function RecommendList({
  tvShowList,
  onClickList,
  showSpinner,
}) {
  const filtered = tvShowList.filter(function (e) {
    return e.backdrop_path != null;
  });

  return (
    <React.Fragment>
      <div className="recommendation_container">
        <div className="spinner">
          {showSpinner ? (
            <Spinner animation="grow" variant="warning" size="sm" />
          ) : null}
        </div>
        <div className="RecommendList_title_box">
          <div className="RecommendList_title_text">
            Recommendations <TfiAngleRight />
          </div>
        </div>
      </div>
      <div className="RecommendList_List">
        {filtered.map((element) => {
          return (
            <span className="TvShowItem" key={filtered.id}>
              <Recommendation
                recommendationList={element}
                onClick_item={onClickList}
              />
            </span>
          );
        })}
      </div>
    </React.Fragment>
  );
}
