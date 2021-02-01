import React, {useState} from 'react';



const Columna2a = () => {
  //Listado miembros
  const [members] = useState([
    {
      id: "0",
      titulo: "John Michael",
      estado: "Online",
      imagen: "./assets/img/theme/team-1.jpg",
    },
    {
      id: "1",
      titulo: "Alex Smith",
      estado: "In a meeting",
      imagen: "./assets/img/theme/team-2.jpg",
    },
    {
      id: "2",
      titulo: "Samantha Ivy",
      estado: "Offline",
      imagen: "./assets/img/theme/team-3.jpg",
    },
    {
      id: "3",
      titulo: "John Michael",
      estado: "Online",
      imagen: "./assets/img/theme/team-4.jpg",
    },
  ]);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="h3 mb-0">Team members</h5>
        </div>

        <div className="card-body">
          <ul className="list-group list-group-flush list my--3">
            {members.map((member) => (
              <li key={member.id} className="list-group-item px-0">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <a href="../../../App" className="avatar rounded-circle">
                      <img alt="placeholder" src={member.imagen} />
                    </a>
                  </div>
                  <div className="col ml--2">
                    <h4 className="mb-0">
                      <a href="../../../App">{member.titulo}</a>
                    </h4>
                    <span className="text-success">●</span>
                    <small>{member.estado}</small>
                  </div>
                  <div className="col-auto">
                    <button type="button" className="btn btn-sm btn-primary">
                      Add
                    </button>
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

export default Columna2a;