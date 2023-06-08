import React from "react";
import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";
export default function Rating({ ratingData }) {
  const star = [];
  const fullStar = Math.floor(ratingData);
  const halfStar = ratingData - parseInt(ratingData) > 0.4;
  const emptyStar = 5 - fullStar - (halfStar ? 1 : 0);
  for (let i = 0; i < fullStar; i++) {
    star.push(<StarFill />);
  }
  halfStar ? star.push(<StarHalf />) : star.push();
  for (let i = 0; i < emptyStar; i++) {
    star.push(<StarEmpty />);
  }
  return <React.Fragment>{star}</React.Fragment>;
}
