import React from "react";
import { Link } from "react-router-dom";

const Otrosli = () => {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link"
          to="/"
          data-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="navbar-maps"
        >
          <i className="ni ni-map-big text-primary"></i>
          <span className="nav-link-text">Maps</span>
        </Link>
        <div className="collapse" id="navbar-maps">
          <ul className="nav nav-sm flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span className="sidenav-mini-icon"> G </span>
                <span className="sidenav-normal"> Google </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span className="sidenav-mini-icon"> V </span>
                <span className="sidenav-normal"> Vector </span>
              </Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="ni ni-archive-2 text-green"></i>
          <span className="nav-link-text">Widgets</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="ni ni-chart-pie-35 text-info"></i>
          <span className="nav-link-text">Charts</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="ni ni-calendar-grid-58 text-red"></i>
          <span className="nav-link-text">Calendar</span>
        </Link>
      </li>
    </>
  );
};

export default Otrosli;
