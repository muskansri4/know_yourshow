import React from "react";
import "./TvShowDetails.scss";
import Rating from "./Rating";
import { countries } from "country-data";
import { TiMediaRecord } from "react-icons/ti";
import { BsFillPersonFill } from "react-icons/bs";

export default function TvShowDetails({ tvShow }) {
  const ratingRes = tvShow.vote_average / 2;
  const maxLenOverview = 250;
  const languageNames = new Intl.DisplayNames(["en"], {
    type: "language",
  });
  const details_text= tvShow.name + "is nice show to watch, It was on air on " + tvShow.media_type+ "on date "
  + tvShow.first_air_date + " It is in " + languageNames.of(tvShow.original_language) + " language. Its fun to watch, It will entertain the audiences."

  return (
    <React.Fragment>
      <div className="title">{tvShow.name}</div>
      <div className="details_container">
        <div className="rating_container">
          <div className="star_icon">
            <span className="star_icon_res">
              <Rating ratingData={ratingRes} />
            </span>
            <span class="star_icon_text">
              {ratingRes && ratingRes.toFixed(1)} / 5
            </span>
            <span class="star_icon_popup">Rating</span>
          </div>
        </div>
        <div className="points_container">
          <div className="air_date">
            {tvShow.first_air_date.slice(0, 4)}{" "}
            <span class="air_date_text">On-Air year</span>
          </div>
          <div className="dot_2">
            <TiMediaRecord />
          </div>
          <div className="origin">
            {countries[tvShow.origin_country].name}{" "}
            <span class="origin_text">Country</span>
          </div>
          <div className="dot_3">
            <TiMediaRecord />
          </div>
          <div className="language">
            {languageNames.of(tvShow.original_language)}
            <span class="language_text">Language</span>
          </div>
          <div className="dot_4">
            <TiMediaRecord />
          </div>
          <div className="media">
            {tvShow.media_type ? tvShow.media_type.toUpperCase() : "TV"}
            <span class="media_text">Media</span>
          </div>
        </div>
      </div>
      <div className="details">
        {tvShow.overview ? (tvShow.overview.length > maxLenOverview
          ? tvShow.overview.slice(0, maxLenOverview) + "  ....  "
          : tvShow.overview) : details_text}
      </div>
    </React.Fragment>
  );
}
