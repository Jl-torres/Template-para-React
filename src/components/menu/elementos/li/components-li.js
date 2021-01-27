import React from 'react';
import { Link } from 'react-router-dom';

const Componentsli = () => {
    return (
        <>
           <li className="nav-item">
              <Link className="nav-link" to="/" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-components">
                <i className="ni ni-ui-04 text-info"></i>
                <span className="nav-link-text">Components</span>
              </Link>
              <div className="collapse" id="navbar-components">
                <ul className="nav nav-sm flex-column">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <span className="sidenav-mini-icon"> B </span>
                      <span className="sidenav-normal"> Buttons </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <span className="sidenav-mini-icon"> C </span>
                      <span className="sidenav-normal"> Cards </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <span className="sidenav-mini-icon"> G </span>
                      <span className="sidenav-normal"> Grid </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <span className="sidenav-mini-icon"> N </span>
                      <span className="sidenav-normal"> Notifications </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <span className="sidenav-mini-icon"> I </span>
                      <span className="sidenav-normal"> Icons </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <span className="sidenav-mini-icon"> T </span>
                      <span className="sidenav-normal"> Typography </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="navbar-multilevel">
                      <span className="sidenav-mini-icon"> M </span>
                      <span className="sidenav-normal"> Multi level </span>
                    </Link>
                    <div className="collapse show" id="navbar-multilevel">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <Link to="/" className="nav-link ">Third level menu</Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/" className="nav-link ">Just another link</Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/" className="nav-link ">One last link</Link>
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

export default Componentsli;