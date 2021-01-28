import React, { useState } from "react";
import { avatar } from "./data/Avatar.json";

const DropdownTopnav = () => {
  const [avatares, guardarAvatares] = useState({ avatar });

  return (
    <>
      <li className="nav-item dropdown">
        <a
          className="nav-link"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="ni ni-bell-55"></i>
        </a>

        <div className="dropdown-menu dropdown-menu-xl  dropdown-menu-right  py-0 overflow-hidden">
          <div className="px-3 py-3">
            <h6 className="text-sm text-muted m-0">
              You have <strong className="text-primary">13</strong>{" "}
              notifications.
            </h6>
          </div>

          {avatar.map((avatar) => (
            <div key={avatar.id} className="list-group list-group-flush">
              <a href="#" className="list-group-item list-group-item-action">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <img
                      alt="Image placeholder"
                      src={avatar.img}
                      className="avatar rounded-circle"
                    />
                  </div>
                  <div className="col ml--2">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h4 className="mb-0 text-sm">{avatar.titulo}</h4>
                      </div>
                      <div className="text-right text-muted">
                        <small>{avatar.tiempo}</small>
                      </div>
                    </div>
                    <p className="text-sm mb-0">{avatar.texto}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}

          <a
            href="#"
            className="dropdown-item text-center text-primary font-weight-bold py-3"
          >
            View all
          </a>
        </div>
      </li>
    </>
  );
};

export default DropdownTopnav;
