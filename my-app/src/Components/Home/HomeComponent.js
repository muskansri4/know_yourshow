import React from "react";
import "./HomeComponent.scss";
import ProjectOneComponent from "../Projects/ProjectOne/ProjectOneComponent";
import ProjectTwoComponent from "../Projects/ProjectTwo/ProjectTwoComponent";
import ProjectHelpComponent from "../Projects/ProjectHelp/ProjectHelpComponent";
import { Route, Routes } from "react-router-dom";
import HomeMenu from "./HomeMenu";

const HomeComponent = () => {
  return (
    <React.Fragment>
    <div className="homecomponent_container">
      <HomeMenu/>
        <Routes>
          <Route exact path="/" Component={ProjectOneComponent} />
          {/* <Route exact path="/a" Component={ProjectOneComponent} />
          <Route exact path="/b" Component={ProjectTwoComponent} />
          <Route exact path="/c" Component={ProjectHelpComponent} />
          <Route exact path="/d" Component={ProjectHelpComponent} /> */}
        </Routes>
        </div>
    </React.Fragment>
  );
};
export default HomeComponent;
