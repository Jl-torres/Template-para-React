import React from "react";
import { Link } from "react-router-dom";

const Formsli = () => {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link"
          to="/"
          data-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="navbar-forms"
        >
          <i className="ni ni-single-copy-04 text-pink"></i>
          <span className="nav-link-text">Forms</span>
        </Link>
        <div className="collapse" id="navbar-forms">
          <ul className="nav nav-sm flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span className="sidenav-mini-icon"> E </span>
                <span className="sidenav-normal"> Elements </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span className="sidenav-mini-icon"> C </span>
                <span className="sidenav-normal"> Components </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span className="sidenav-mini-icon"> V </span>
                <span className="sidenav-normal"> Validation </span>
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default Formsli;
