import React, { useState } from "react";

const Columna2b = () => {
  //Listado tareas
  const [tareas] = useState([
    {
      id: "0",
      titulo: "Call with Dave",
      hora: "10:30 AM",
      inputClass: "custom-control custom-checkbox custom-checkbox-success",
      divClass: "checklist-item checklist-item-success",
    },

    {
      id: "1",
      titulo: "Lunch meeting",
      hora: "10:30 AM",
      inputClass: "custom-control custom-checkbox custom-checkbox-info",
      divClass: "checklist-item checklist-item-info",
    },

    {
      id: "2",
      titulo: "Argon Dashboard Launch",
      hora: "10:30 AM",
      inputClass: "custom-control custom-checkbox custom-checkbox-warning",
      divClass: "checklist-item checklist-item-warning",
    },

    {
      id: "3",
      titulo: "Winter Hackaton",
      hora: "10:30 AM",
      inputClass: "custom-control custom-checkbox custom-checkbox-danger",
      divClass: "checklist-item checklist-item-danger",
    },
  ]);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="h3 mb-0">To do list</h5>
        </div>

        <div className="card-body p-0">
          <ul className="list-group list-group-flush" data-toggle="checklist">
            {tareas.map((tarea) => (
              <li
                key={tarea.id}
                className="checklist-entry list-group-item flex-column align-items-start py-4 px-4"
              >
                <div className={tarea.divClass}>
                  <div className="checklist-info">
                    <h5 className="checklist-title mb-0">{tarea.titulo}</h5>
                    <small>{tarea.hora}</small>
                  </div>
                  <div>
                    <div className={tarea.inputClass}>
                      <input
                        className="custom-control-input"
                        id="chk-todo-task-1"
                        type="checkbox"
                        checked
                        readOnly
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="chk-todo-task-1"
                      ></label>
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

export default Columna2b;
