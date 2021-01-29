import React from "react";

const Components = () => {
  return (
    <>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#navbar-components"
          data-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="navbar-components"
        >
          <i className="ni ni-ui-04 text-info"></i>
          <span id="click" className="nav-link-text">Components</span>
        </a>
        <div className="collapse" id="navbar-components">
          <ul className="nav nav-sm flex-column">
            <li className="nav-item">
              <a href="../../pages/components/buttons.html" className="nav-link">
                <span id="Sub" className="j jh sidenav-mini-iconj"> B </span>
                <span id="click" className="j sidenav-normal"> Buttons </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/components/cards.html" className="nav-link">
                <span id="Sub" className="j jh sidenav-mini-iconj"> C </span>
                <span id="click" className="j sidenav-normal"> Cards </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/components/grid.html" className="nav-link">
                <span id="Sub" className="j jh sidenav-mini-iconj"> G </span>
                <span id="click" className="j sidenav-normal"> Grid </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="../../pages/components/notifications.html"
                className="nav-link"
              >
                <span id="Sub" className="j jh sidenav-mini-iconj"> N </span>
                <span id="click" className="j sidenav-normal"> Notifications </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/components/icons.html" className="nav-link">
                <span id="Sub" className="j jh sidenav-mini-iconj"> I </span>
                <span id="click" className="j sidenav-normal"> Icons </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/components/typography.html" className="nav-link">
                <span id="Sub" className="j jh sidenav-mini-iconj"> T </span>
                <span id="click" className="j sidenav-normal"> Typography </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#navbar-multilevel"
                className="nav-link"
                data-toggle="collapse"
                role="button"
                aria-expanded="true"
                aria-controls="navbar-multilevel"
              >
                <span id="Sub" className="j jh sidenav-mini-iconj"> M </span>
                <span id="click" className="j sidenav-normal"> Multi level </span>
              </a>
              <div className="collapse show" id="navbar-multilevel" style={{}}>
                <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                    <a href="#!" className="nav-link ">
                      Third level menu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link ">
                      Just another link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link ">
                      One last link
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default Components;
