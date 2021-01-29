import React from "react";

const Tables = () => {
  return (
    <>
      <li className="nav-item">
              <a className="nav-link" href="#navbar-tables" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-tables">
                <i className="ni ni-align-left-2 text-default"></i>
                <span id="click" className="nav-link-text">Tables</span>
              </a>
              <div className="collapse" id="navbar-tables">
                <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                    <a href="../../pages/tables/tables.html" className="nav-link">
                      <span id="Sub" className="j jh sidenav-mini-iconj"> T </span>
                      <span id="click" className="j sidenav-normal"> Tables </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../../pages/tables/sortable.html" className="nav-link">
                      <span id="Sub" className="j jh sidenav-mini-iconj"> S </span>
                      <span id="click" className="j sidenav-normal"> Sortable </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../../pages/tables/datatables.html" className="nav-link">
                      <span id="Sub" className="j jh sidenav-mini-iconj"> D </span>
                      <span id="click" className="j sidenav-normal"> Datatables </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
    </>
  );
};

export default Tables;
