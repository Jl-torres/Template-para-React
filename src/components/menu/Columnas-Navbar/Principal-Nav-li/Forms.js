import React from "react";

const Forms = () => {
  return (
    <>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#navbar-forms"
          data-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="navbar-forms"
        >
          <i className="ni ni-single-copy-04 text-pink"></i>
          <span id="click" className="nav-link-text">Forms</span>
        </a>
        <div className="collapse" id="navbar-forms">
          <ul className="nav nav-sm flex-column">
            <li className="nav-item">
              <a href="../../pages/forms/elements.html" className="nav-link">
                <span className="sidenav-mini-icon"> E </span>
                <span className="sidenav-normal"> Elements </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/forms/components.html" className="nav-link">
                <span className="sidenav-mini-icon"> C </span>
                <span className="sidenav-normal"> Components </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/forms/validation.html" className="nav-link">
                <span className="sidenav-mini-icon"> V </span>
                <span className="sidenav-normal"> Validation </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default Forms;
