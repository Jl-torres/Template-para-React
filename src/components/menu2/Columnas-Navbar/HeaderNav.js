import React from 'react';

const HeaderNav = () => {
    return (
        <div class="sidenav-header  d-flex  align-items-center">
        <a class="navbar-brand" href="../../pages/dashboards/dashboard.html">
          <img src="../../assets/img/brand/blue.png" class="navbar-brand-img" alt="..."/>
        </a>
        <div class=" ml-auto ">
          
          <div class="sidenav-toggler d-none d-xl-block" data-action="sidenav-unpin" data-target="#sidenav-main">
            <div class="sidenav-toggler-inner">
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HeaderNav;