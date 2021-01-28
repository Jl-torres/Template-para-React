import React from 'react';
//imagenes
import team1 from '../../../header/media/team-1.jpg'


const Columna2c = () => {
    return (
        <>
        
        <div class="card">
            
            <div class="card-header">
             
              <h5 class="h3 mb-0">Progress track</h5>
            </div>
           
            <div class="card-body">
              
              <ul class="list-group list-group-flush list my--3">
                <li class="list-group-item px-0">
                  <div class="row align-items-center">
                    <div class="col-auto">
                     
                      <a href="#" class="avatar rounded-circle">
                        <img alt="Image placeholder" src={team1}/>
                      </a>
                    </div>
                    <div class="col">
                      <h5>Argon Design System</h5>
                      <div class="progress progress-xs mb-0">
                        <div class="progress-bar bg-orange" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                        style={{width: '60%'}} ></div>
                      </div>
                    </div>
                  </div>
                </li>
              
              </ul>
            </div>
          </div>
       
        </>
    );
};

export default Columna2c ;