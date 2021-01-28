import React from 'react';
//imagenes
import team1 from '../../../header/media/team-1.jpg'


const Columna2a = () => {
    return (
        <>
        
        <div className="card">
            <div className="card-header">
               <h5 className="h3 mb-0">Team members</h5>
            </div>

            <div className="card-body">
        <ul className="list-group list-group-flush list my--3">
        
        <li className="list-group-item px-0">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      
                      <a href="#" className="avatar rounded-circle">
                        <img alt="Image placeholder" src={team1}/>
                      </a>
                    </div>
                    <div className="col ml--2">
                      <h4 className="mb-0">
                        <a href="#!">John Michael</a>
                      </h4>
                      <span className="text-success">●</span>
                      <small>Online</small>
                    </div>
                    <div className="col-auto">
                      <button type="button" className="btn btn-sm btn-primary">Add</button>
                    </div>
                  </div>
                </li>

        </ul>
       </div> 

        </div>   

       
        </>
    );
};

export default Columna2a ;