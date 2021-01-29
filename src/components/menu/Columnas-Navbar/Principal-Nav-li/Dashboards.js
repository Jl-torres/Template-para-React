import React from 'react';

const Dashboards = () => {
    return (
        <>
        <li className="nav-item">
              <a className="nav-link active" href="#navbar-dashboards" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="navbar-dashboards">
                <i className="ni ni-shop text-primary"></i>
                <span className="nav-link-text">Dashboards</span>
              </a>
              <div className="collapse show" id="navbar-dashboards">
                <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                    <a href="../../pages/dashboards/dashboard.html" className="nav-link">
                      <span className="sidenav-mini-icon"> D </span>
                      <span className="sidenav-normal"> Dashboard </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../../pages/dashboards/alternative.html" className="nav-link">
                      <span className="sidenav-mini-icon"> A </span>
                      <span className="sidenav-normal"> Alternative </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
        </>
    );
};

export default Dashboards;