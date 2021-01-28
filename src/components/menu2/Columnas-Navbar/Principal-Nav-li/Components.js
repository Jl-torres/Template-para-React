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
          <span className="nav-link-text">Components</span>
        </a>
        <div className="collapse" id="navbar-components">
          <ul className="nav nav-sm flex-column">
            <li className="nav-item">
              <a href="../../pages/components/buttons.html" className="nav-link">
                <span className="sidenav-mini-icon"> B </span>
                <span className="sidenav-normal"> Buttons </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/components/cards.html" className="nav-link">
                <span className="sidenav-mini-icon"> C </span>
                <span className="sidenav-normal"> Cards </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/components/grid.html" className="nav-link">
                <span className="sidenav-mini-icon"> G </span>
                <span className="sidenav-normal"> Grid </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="../../pages/components/notifications.html"
                className="nav-link"
              >
                <span className="sidenav-mini-icon"> N </span>
                <span className="sidenav-normal"> Notifications </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/components/icons.html" className="nav-link">
                <span className="sidenav-mini-icon"> I </span>
                <span className="sidenav-normal"> Icons </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../pages/components/typography.html" className="nav-link">
                <span className="sidenav-mini-icon"> T </span>
                <span className="sidenav-normal"> Typography </span>
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
                <span className="sidenav-mini-icon"> M </span>
                <span className="sidenav-normal"> Multi level </span>
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
