import React from "react";

const HeaderCard = () => {
  return (
    <>
      <div className="card-header d-flex align-items-center">
        <div className="d-flex align-items-center">
          <a href="../../../App">
            <img src="../../assets/img/theme/team-1.jpg" className="avatar" alt="team" />
          </a>
          <div className="mx-3">
            <a href="../../../App" className="text-dark font-weight-600 text-sm">
              John Snow
            </a>
            <small className="d-block text-muted">3 days ago</small>
          </div>
        </div>
        <div className="text-right ml-auto">
          <button type="button" className="btn btn-sm btn-primary btn-icon">
            <span className="btn-inner--icon">
              <i className="ni ni-fat-add"></i>
            </span>
            <span className="btn-inner--text">Follow</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderCard;
