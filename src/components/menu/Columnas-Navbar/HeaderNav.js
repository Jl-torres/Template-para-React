import React from 'react';

const HeaderNav = () => {
    return (
        <div className="sidenav-header  d-flex  align-items-center">
        <a className="navbar-brand" href="../../pages/dashboards/dashboard.html">
          <img src="../../assets/img/brand/blue.png" className="navbar-brand-img" alt="..."/>
        </a>
        <div className=" ml-auto ">
          
          <div className="sidenav-toggler d-none d-xl-block" data-action="sidenav-unpin" data-target="#sidenav-main">
            <div className="sidenav-toggler-inner">
              <i className="sidenav-toggler-line"></i>
              <i className="sidenav-toggler-line"></i>
              <i className="sidenav-toggler-line"></i>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HeaderNav;