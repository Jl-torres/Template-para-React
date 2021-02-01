import React from "react";

const Documentation = () => {
  return (
    <>
      <li className="nav-item">
        <a
          className="nav-link"
          href="../../../App "
          target="_blank"
        >
          <i className="ni ni-spaceship"></i>
          <span id="click" className="nav-link-text nav-link-text-menu">Getting started</span>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="../../../App"
          target="_blank"
        >
          <i className="ni ni-palette"></i>
          <span id="click" className="nav-link-text nav-link-text-menu">Foundation</span>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="../../../App"
          target="_blank"
        >
          <i className="ni ni-ui-04"></i>
          <span id="click" className="nav-link-text nav-link-text-menu">Components</span>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="../../../App"
          target="_blank"
        >
          <i className="ni ni-chart-pie-35"></i>
          <span id="click" className="nav-link-text nav-link-text-menu">Plugins</span>
        </a>
      </li>
    </>
  );
};

export default Documentation;
