import React, {useState} from 'react';
import './columna2c.css'


const Columna2c = () => {

   //Listado progreso
   const [progreso, guardarProgreso] =useState(

    [
    {id:'0', titulo:'Argon Design System', porcentaje:'progress-bar bg-orange avance1', imagen:'./assets/img/theme/bootstrap.jpg'},
    {id:'1', titulo:'Angular Now UI Kit PRO',  porcentaje:'progress-bar bg-red avance2', imagen:'./assets/img/theme/angular.jpg'},
    {id:'2', titulo:'Black Dashboard', porcentaje:'progress-bar bg-teal avance3', imagen:'./assets/img/theme/sketch.jpg'},
    {id:'3', titulo:'React Material Dashboard', porcentaje:'progress-bar bg-green avance4', imagen:'./assets/img/theme/react.jpg'}
    ]
)   

    return (
        <>
        
        <div class="card">
         <div class="card-header">
          <h5 class="h3 mb-0">Progress track</h5>
            </div>           
            <div class="card-body">
             <ul class="list-group list-group-flush list my--3">

                {progreso.map(avance => (
                  <li key={avance.id} class="list-group-item px-0">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <a href="#" class="avatar rounded-circle">
                        <img alt="Image placeholder" src={avance.imagen}/>
                      </a>
                    </div>
                    <div class="col">
                      <h5>{avance.titulo}</h5>
                      <div class="progress progress-xs mb-0">
                        <div class={avance.porcentaje} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
                ))}
              
              </ul>
            </div>
          </div>
       
        </>
    );
};

export default Columna2c ;