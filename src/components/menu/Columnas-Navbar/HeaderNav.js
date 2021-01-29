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
      var cambio = document.querySelectorAll("#click");
    

    for(var i = 0; i< cambio.length; i++)
    {
      cambio[i].classList.add("nav-link-text-menu")};

      contador=0
    };
//Para el boton id="logo" 
  if(contador===0) {

    document.getElementById("boton").classList.add ("navTop");
    document.getElementById("logo").classList.add ("logo");
    document.getElementById("Documents").classList.remove ("ocultar");

  } else {

    document.getElementById("boton").classList.remove ("navTop");
    document.getElementById("logo").classList.remove ("logo");
    document.getElementById("Documents").classList.add ("ocultar");
  };

//Sub Titulos  

if(contador===0) {

  var cambioSub = document.querySelectorAll("#Sub");

  for(var i = 0; i< cambioSub.length; i++)
    {
      cambioSub[i].classList.remove("ocultar")
    };


} else {

  var cambioSub = document.querySelectorAll("#Sub");
    
  for(var i = 0; i< cambioSub.length; i++)
  {
    cambioSub[i].classList.add("ocultar")};

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


/*
const btnNav = () => {
    var cambio = document.querySelectorAll("#click");
    console.log(cambio.length)

    for(var i = 0; i< cambio.length; i++)
    {
      cambio[i].classList.remove("nav-link-text-menu")
    }
  }
*/