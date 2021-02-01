import React from 'react';
import Buscador from './elementos/Buscador';
import DropdownTopnav from './elementos/DropdownTopnav';
import IconosNavtop from './elementos/IconosNavtop';
import UsuarioNavtop from './elementos/UsuariosNavtop';
//css
import './topnav.css'

const Topnav = () => {
    return (
        <>
      <nav className="topnav navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
         <Buscador/>

        <ul className="navbar-nav align-items-center  ml-md-auto ">
            <li className="nav-item d-xl-none">
                <div className="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </div>
           </li>

           <li className="nav-item d-sm-none">
              <a className="nav-link" href="../App" data-action="search-show" data-target="#navbar-search-main">
                <i className="ni ni-zoom-split-in"></i>
              </a>
            </li>
        
         <DropdownTopnav/>

         <li className="nav-item dropdown">
            <a className="nav-link" href="../App" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="ni ni-ungroup"></i>
            </a>
        
            <IconosNavtop/>

         </li>

         <UsuarioNavtop/>

        
         </ul>
         </div>
       </div>
      </nav> 
        
        </>
    );
};

export default Topnav;