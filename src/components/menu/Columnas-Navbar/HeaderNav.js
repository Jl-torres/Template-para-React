import React, {useState} from 'react';

const HeaderNav = () => {

  var contador = useState(0)

//Boton con doble funcionalidad
//General

  const btnNav = () => {
    if (contador===0){

      var cambio = document.querySelectorAll("#click");
      

    for(var i = 0; i< cambio.length; i++)
    {
      cambio[i].classList.remove("nav-link-text-menu")};

      contador=1

    } else {
       cambio = document.querySelectorAll("#click");
    

    for( i = 0; i< cambio.length; i++)
    {
      cambio[i].classList.add("nav-link-text-menu")};

      contador=0
    };
//Para el boton id="logo" 
  if(contador===0) {

    document.getElementById("boton").classList.add ("navTop");
    document.getElementById("logo").classList.add ("logo");
    document.getElementById("Documents").classList.remove ("ocultar");
    document.getElementById("paginaPrincipal").classList.remove ("Paginasmall");
    document.getElementById("paginaPrincipal").classList.add ("Pagina");
 

  } else {

    document.getElementById("boton").classList.remove ("navTop");
    document.getElementById("logo").classList.remove ("logo");
    document.getElementById("Documents").classList.add ("ocultar");
    document.getElementById("paginaPrincipal").classList.add ("Paginasmall");
    document.getElementById("paginaPrincipal").classList.remove ("Pagina");
  };

//Sub Titulos  

if(contador===0) {

  var cambioSub = document.querySelectorAll("#Sub");

  for(var ib = 0; ib< cambioSub.length; ib++)
    {
      cambioSub[ib].classList.remove("ocultar")
    };


} else {

   cambioSub = document.querySelectorAll("#Sub");
    
  for( ib = 0; ib< cambioSub.length; ib++)
  {
    cambioSub[ib].classList.add("ocultar")};

};
  


  }

  

    return (
        <div className="sidenav-header  d-flex  align-items-center">
        <a id="logo" className="navbar-brand" href="../../pages/dashboards/dashboard.html">
          <img src="../../assets/img/brand/blue.png" className="navbar-brand-img" alt="..."/>
        </a>
        
        <div onClick={()=>{btnNav()}} className=" ml-auto ">   
          <div id="boton" className="sidenav-toggler d-none d-xl-block" data-action="sidenav-unpin" data-target="#sidenav-main">
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


