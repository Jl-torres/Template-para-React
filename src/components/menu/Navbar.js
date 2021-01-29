import React from "react";
import HeaderNav from "./Columnas-Navbar/HeaderNav";
import PrincipalNav from "./Columnas-Navbar/PrincipalNav";
import Documentation from "./Columnas-Navbar/NavSecundario-li/Documentation";
import './navbarMenu.css'

const Navbar2 = () => {
  return (
    <>
      <nav
        className="scrollMenu sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white"
        id="sidenav-main"
      >
        <div className="scrollbar-inner">
          <HeaderNav />

          <div className="navbar-inner">
            <div className="collapse navbar-collapse" id="sidenav-collapse-main">
              <ul className="navbar-nav">
                <PrincipalNav />
              </ul>

              <hr className="my-3" />

              <h6 className="navbar-heading p-0 text-muted">
                <span className="docs-normal">Documentation</span>
                <span className="docs-mini">D</span>
              </h6>
              
              <ul className="navbar-nav mb-md-3">

              <Documentation/>

              </ul>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
