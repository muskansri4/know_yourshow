import React from "react";
import "./TvShowDetails.scss";

export default function Logo(props) {
  return (
    <div className="logo_container">
      <div className="logo_img">
        <img src={props.img} alt="logo" />
      </div>
      <div className="logo_subtitle">{props.subtitle}</div>
    </div>
  );
}
