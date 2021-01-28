import React from "react";
import { Link } from "react-router-dom";

const Examplesli = () => {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link"
          to="/"
          data-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="navbar-examples"
        >
          <i className="ni ni-ungroup text-orange"></i>
          <span className="nav-link-text">Examples</span>
        </Link>
        <div className="collapse" id="navbar-examples">
          <ul className="nav nav-sm flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span className="sidenav-mini-icon"> P </span>
                <span className="sidenav-normal"> Pricing </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span className="sidenav-mini-icon"> L </span>
                <span className="sidenav-normal"> Login </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span className="sidenav-mini-icon"> R </span>
                <span className="sidenav-normal"> Register </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span className="sidenav-mini-icon"> L </span>
                <span className="sidenav-normal"> Lock </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span className="sidenav-mini-icon"> T </span>
                <span className="sidenav-normal"> Timeline </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span className="sidenav-mini-icon"> P </span>
                <span className="sidenav-normal"> Profile </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span className="sidenav-mini-icon"> RP </span>
                <span className="sidenav-normal"> RTL Support </span>
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default Examplesli;
