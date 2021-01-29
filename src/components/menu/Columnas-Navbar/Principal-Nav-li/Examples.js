import React from "react";

const Examples = () => {
  return (
    <>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#navbar-examples"
          data-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="navbar-examples"
        >
          <i className="ni ni-ungroup text-orange"></i>
          <span className="nav-link-text">Examples</span>
        </a>
        <div className="collapse" id="navbar-examples">
          <ul className="nav nav-sm flex-column">
            <li className="nav-item">
              <a href="../../pages/examples/pricing.html" className="nav-link">
                <span className="sidenav-mini-icon"> P </span>
                <span className="sidenav-normal"> Pricing </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/examples/login.html" className="nav-link">
                <span className="sidenav-mini-icon"> L </span>
                <span className="sidenav-normal"> Login </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/examples/register.html" className="nav-link">
                <span className="sidenav-mini-icon"> R </span>
                <span className="sidenav-normal"> Register </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/examples/lock.html" className="nav-link">
                <span className="sidenav-mini-icon"> L </span>
                <span className="sidenav-normal"> Lock </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/examples/timeline.html" className="nav-link">
                <span className="sidenav-mini-icon"> T </span>
                <span className="sidenav-normal"> Timeline </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/examples/profile.html" className="nav-link">
                <span className="sidenav-mini-icon"> P </span>
                <span className="sidenav-normal"> Profile </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/examples/rtl-support.html" className="nav-link">
                <span className="sidenav-mini-icon"> RP </span>
                <span className="sidenav-normal"> RTL Support </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default Examples;
