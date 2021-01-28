import React from "react";
import HeaderNav from "./Columnas-Navbar/HeaderNav";
import PrincipalNav from "./Columnas-Navbar/PrincipalNav";
import Documentation from "./Columnas-Navbar/NavSecundario-li/Documentation";

const Navbar2 = () => {
  return (
    <>
      <nav
        class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white"
        id="sidenav-main"
      >
        <div class="scrollbar-inner">
          <HeaderNav />

          <div class="navbar-inner">
            <div class="collapse navbar-collapse" id="sidenav-collapse-main">
              <ul className="navbar-nav">
                <PrincipalNav />
              </ul>

              <hr className="my-3" />

              <h6 class="navbar-heading p-0 text-muted">
                <span class="docs-normal">Documentation</span>
                <span class="docs-mini">D</span>
              </h6>
              
              <ul class="navbar-nav mb-md-3">

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
