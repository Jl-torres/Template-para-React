import React from "react";

const Maps = () => {
  return (
    <>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#navbar-maps"
          data-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="navbar-maps"
        >
          <i className="ni ni-map-big text-primary"></i>
          <span id="click" className="nav-link-text">Maps</span>
        </a>
        <div className="collapse" id="navbar-maps">
          <ul className="nav nav-sm flex-column">
            <li className="nav-item">
              <a href="../../pages/maps/google.html" className="nav-link">
                <span className="sidenav-mini-icon"> G </span>
                <span className="sidenav-normal"> Google </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/maps/vector.html" className="nav-link">
                <span className="sidenav-mini-icon"> V </span>
                <span className="sidenav-normal"> Vector </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default Maps;
