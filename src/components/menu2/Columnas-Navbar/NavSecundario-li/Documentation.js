import React from "react";

const Documentation = () => {
  return (
    <>
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://demos.creative-tim.com/argon-dashboard-pro/docs/getting-started/overview.html"
          target="_blank"
        >
          <i className="ni ni-spaceship"></i>
          <span className="nav-link-text">Getting started</span>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://demos.creative-tim.com/argon-dashboard-pro/docs/foundation/colors.html"
          target="_blank"
        >
          <i className="ni ni-palette"></i>
          <span className="nav-link-text">Foundation</span>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://demos.creative-tim.com/argon-dashboard-pro/docs/components/alerts.html"
          target="_blank"
        >
          <i className="ni ni-ui-04"></i>
          <span className="nav-link-text">Components</span>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://demos.creative-tim.com/argon-dashboard-pro/docs/plugins/charts.html"
          target="_blank"
        >
          <i className="ni ni-chart-pie-35"></i>
          <span className="nav-link-text">Plugins</span>
        </a>
      </li>
    </>
  );
};

export default Documentation;
