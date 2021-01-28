import React from "react";

const Tbody = ({Light}) => {

  const {id, titulo, budget, status, imagen, statusi } = Light


  return (
    <>
      <tr>
        <th scope="row">
          <div className="media align-items-center">
            <a href="#" className="avatar rounded-circle mr-3">
              <img
                alt="Image placeholder"
                src={imagen}
              />
            </a>
            <div className="media-body">
              <span className="name mb-0 text-sm">{titulo}</span>
            </div>
          </div>
        </th>
        <td className="budget">{budget}</td>
        <td>
          <span className="badge badge-dot mr-4">
            <i className={statusi}></i>
            <span className="status">{status}</span>
          </span>
        </td>
        <td>
          <div className="avatar-group">
            <a
              href="#"
              className="avatar avatar-sm rounded-circle"
              data-toggle="tooltip"
              data-original-title="Ryan Tompson"
            >
              <img
                alt="Image placeholder"
                src="../../assets/img/theme/team-1.jpg"
              />
            </a>
            <a
              href="#"
              className="avatar avatar-sm rounded-circle"
              data-toggle="tooltip"
              data-original-title="Romina Hadid"
            >
              <img
                alt="Image placeholder"
                src="../../assets/img/theme/team-2.jpg"
              />
            </a>
            <a
              href="#"
              className="avatar avatar-sm rounded-circle"
              data-toggle="tooltip"
              data-original-title="Alexander Smith"
            >
              <img
                alt="Image placeholder"
                src="../../assets/img/theme/team-3.jpg"
              />
            </a>
            <a
              href="#"
              className="avatar avatar-sm rounded-circle"
              data-toggle="tooltip"
              data-original-title="Jessica Doe"
            >
              <img
                alt="Image placeholder"
                src="../../assets/img/theme/team-4.jpg"
              />
            </a>
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <span className="completion mr-2">60%</span>
            <div>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
        </td>
        <td className="text-right">
          <div className="dropdown">
            <a
              className="btn btn-sm btn-icon-only text-light"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Tbody;
