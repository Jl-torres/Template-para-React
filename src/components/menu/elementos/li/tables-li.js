import React from "react";
import { Link } from "react-router-dom";

const Tablesli = () => {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link"
          to="#navbar-tables"
          data-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="navbar-tables"
        >
          <i className="ni ni-align-left-2 text-default"></i>
          <span className="nav-link-text">Tables</span>
        </Link>
        <div className="collapse" id="navbar-tables">
          <ul className="nav nav-sm flex-column">
            <li className="nav-item">
              <Link to="../../pages/tables/tables.html" className="nav-link">
                <span className="sidenav-mini-icon"> T </span>
                <span className="sidenav-normal"> Tables </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="../../pages/tables/sortable.html" className="nav-link">
                <span className="sidenav-mini-icon"> S </span>
                <span className="sidenav-normal"> Sortable </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="../../pages/tables/datatables.html"
                className="nav-link"
              >
                <span className="sidenav-mini-icon"> D </span>
                <span className="sidenav-normal"> Datatables </span>
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default Tablesli;
