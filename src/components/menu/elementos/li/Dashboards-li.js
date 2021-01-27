import React from 'react';
import { Link } from "react-router-dom";


const Dashboardsli = () => {
    return (
        
       <>
       <li className="nav-item">
              <Link className="nav-link active" to="/" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="navbar-dashboards">
                <i className="ni ni-shop text-primary"></i>
                <span className="nav-link-text">Dashboards</span>
              </Link>
              <div className="collapse show" id="navbar-dashboards">
                <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <span className="sidenav-mini-icon"> D </span>
                      <span className="sidenav-normal"> Dashboard </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <span className="sidenav-mini-icon"> A </span>
                      <span className="sidenav-normal"> Alternative </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
        </>

       
    );
};

export default  Dashboardsli;