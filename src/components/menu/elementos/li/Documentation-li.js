import React from "react";
import { Link } from "react-router-dom";

const Documentationli = () => {
  return (
    <>
      <ul className="navbar-nav mb-md-3">
        <li className="nav-item">
          <Link
            className="nav-link"
            to="https://demos.creative-tim.com/argon-dashboard-pro/docs/getting-started/overview.html"
            target="_blank"
          >
            <i className="ni ni-spaceship"></i>
            <span className="nav-link-text">Getting started</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="https://demos.creative-tim.com/argon-dashboard-pro/docs/foundation/colors.html"
            target="_blank"
          >
            <i className="ni ni-palette"></i>
            <span className="nav-link-text">Foundation</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="https://demos.creative-tim.com/argon-dashboard-pro/docs/components/alerts.html"
            target="_blank"
          >
            <i className="ni ni-ui-04"></i>
            <span className="nav-link-text">Components</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="https://demos.creative-tim.com/argon-dashboard-pro/docs/plugins/charts.html"
            target="_blank"
          >
            <i className="ni ni-chart-pie-35"></i>
            <span className="nav-link-text">Plugins</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Documentationli;
