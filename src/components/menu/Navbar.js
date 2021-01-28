import React from "react";

import Logo from "./elementos/Logo";
//li
import Dashboardsli from "./elementos/li/Dashboards-li";
import Examplesli from "./elementos/li/Examples-li";
import Componentsli from "./elementos/li/components-li";
import Formsli from "./elementos/li/Forms-li";
import Tablesli from "./elementos/li/tables-li";
import Otrosli from "./elementos/li/Otros-li";
import Documentationli from "./elementos/li/Documentation-li";
//css
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav
        className="menu sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white"
        id="sidenav-main"
      >
        <div className="navbar ">
          <Logo />
          <div className="navbar-inner">
            <div
              className="collapse navbar-collapse"
              id="sidenav-collapse-main"
            >
              <ul className="navMenu nav nav-sm flex-column">
                <Dashboardsli />

                <Examplesli />

                <Componentsli />

                <Formsli />

                <Tablesli />

                <Otrosli />

                <hr className="my-3" />

                <h6 className="navbar-heading p-0 text-muted">
                  <span className="docs-normal">Documentation</span>
                  <span className="docs-mini">D</span>
                </h6>

                <Documentationli />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
