import React from 'react';
import { Link } from "react-router-dom";
//Imagenes
import blue from '../media/blue.png';
import './css/logo.css' 

const Logo = () => {
    return (
        
       <>
       <div className="contenedor-navLogo">
      <div className="sidenav-header  d-flex  align-items-center">
        <Link className="navbar-brand" to="/">
          <img src={blue} className="navbar-brand-img"  alt="..."/>
        </Link>
        </div>
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
        </>

       
    );
};

export default Logo;