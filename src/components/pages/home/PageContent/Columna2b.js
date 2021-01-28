import React from 'react';
//imagenes
//import team1 from '../../../header/media/team-1.jpg'


const Columna2b = () => {
    return (
        <>
        
        <div className="card">
          
            <div className="card-header">
            
              <h5 className="h3 mb-0">To do list</h5>
            </div>
            
            <div className="card-body p-0">
            
              <ul className="list-group list-group-flush" data-toggle="checklist">
                <li className="checklist-entry list-group-item flex-column align-items-start py-4 px-4">
                  <div className="checklist-item checklist-item-success">
                    <div className="checklist-info">
                      <h5 className="checklist-title mb-0">Call with Dave</h5>
                      <small>10:30 AM</small>
                    </div>
                    <div>
                      <div className="custom-control custom-checkbox custom-checkbox-success">
                        <input className="custom-control-input" id="chk-todo-task-1" type="checkbox" checked/>
                        <label className="custom-control-label" htmlFor="chk-todo-task-1"></label>
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

export default Columna2b ;