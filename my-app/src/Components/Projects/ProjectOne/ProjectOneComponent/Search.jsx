import React, { useState } from "react";
import Button from 'react-bootstrap/Button';


export default function Search({ onClick }) {
  const [searchInput, setsearchInput] = useState("");
  const search_now = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onClick(e.target.value);
      setsearchInput("");
    }
  };
  const handleChange = (e) => {
    setsearchInput(e.target.value);
  };
  const clearfunc = ()=> {
    setsearchInput("");
  }
  return (
    <React.Fragment>
      <div className="search_container">
        <input
          onKeyUp={search_now}
          className="search_box"
          type="text"
          onChange={handleChange}
          value={searchInput}
          placeholder="Search show here ...."
        ></input>
        <div className="clear_btn">
          <Button variant="danger" onClick={clearfunc}>X</Button>
        </div>
      </div>
    </React.Fragment>
  );
}
