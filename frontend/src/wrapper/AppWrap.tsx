import React from "react";
import { NavigationDots, SocialMedia } from "../components";

type ComponentType = React.ComponentType<any>;

const AppWrap = (
  Component?: ComponentType,
  idName?: string,
  classNames?: string
) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          {Component && <Component />}

          <div className="copyright">
            <p className="p-text">@2020 MICHAEL</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
