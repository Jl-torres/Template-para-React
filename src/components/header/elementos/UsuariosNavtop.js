import React from "react";
//imagenes
import team1 from "../media/team-1.jpg";

const UsuariosNavtop = () => {
  return (
    <>
      <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
        <li className="nav-item dropdown">
          <a
            className="nav-link pr-0"
            href="../../App"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="media align-items-center">
              <span className="avatar avatar-sm rounded-circle">
                <img alt="placeholder" src={team1} />
              </span>
              <div className="media-body  ml-2  d-none d-lg-block">
                <span className="mb-0 text-sm  font-weight-bold">
                  John Snow
                </span>
              </div>
            </div>
          </a>
          <div className="dropdown-menu  dropdown-menu-right ">
            <div className="dropdown-header noti-title">
              <h6 className="text-overflow m-0">Welcome!</h6>
            </div>
            <a href="../../App" className="dropdown-item">
              <i className="ni ni-single-02"></i>
              <span>My profile</span>
            </a>
            <a href="../../App" className="dropdown-item">
              <i className="ni ni-settings-gear-65"></i>
              <span>Settings</span>
            </a>
            <a href="../../App" className="dropdown-item">
              <i className="ni ni-calendar-grid-58"></i>
              <span>Activity</span>
            </a>
            <a href="../../App" className="dropdown-item">
              <i className="ni ni-support-16"></i>
              <span>Support</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="../../App" className="dropdown-item">
              <i className="ni ni-user-run"></i>
              <span>Logout</span>
            </a>
          </div>
        </li>
      </ul>
    </>
  );
};

export default UsuariosNavtop;
