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
          <span id="click" className="nav-link-text">Examples</span>
        </a>
        <div className="collapse" id="navbar-examples">
          <ul className="nav nav-sm flex-column">
            <li className="nav-item">
              <a href="../../pages/examples/pricing.html" className="nav-link">
                <span id="Sub" className=" j jh sidenav-mini-iconj"> P </span>
                <span id="click" className="j sidenav-normal"> Pricing </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/examples/login.html" className="nav-link">
                <span id="Sub" className=" j jh sidenav-mini-iconj"> L </span>
                <span id="click" className="j sidenav-normal"> Login </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/examples/register.html" className="nav-link">
                <span id="Sub"   className=" j jh sidenav-mini-iconj"> R </span>
                <span id="click" className="j sidenav-normal"> Register </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/examples/lock.html" className="nav-link">
                <span id="Sub" className=" j jh sidenav-mini-iconj"> L </span>
                <span id="click" className="j sidenav-normal"> Lock </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/examples/timeline.html" className="nav-link">
                <span id="Sub" className=" j jh sidenav-mini-iconj"> T </span>
                <span id="click" className="j sidenav-normal"> Timeline </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/examples/profile.html" className="nav-link">
                <span id="Sub" className=" j jh sidenav-mini-iconj"> P </span>
                <span id="click"  className="j sidenav-normal"> Profile </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/examples/rtl-support.html" className="nav-link">
                <span id="Sub" className=" j jh sidenav-mini-iconj"> RP </span>
                <span id="click" className="j sidenav-normal"> RTL Support </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default Examples;
