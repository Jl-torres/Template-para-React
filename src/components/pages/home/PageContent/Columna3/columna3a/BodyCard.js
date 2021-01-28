import React from "react";

const BodyCard = () => {
  return (
    <>
      <p className="mb-4">
        Personal profiles are the perfect way for you to grab their attention
        and persuade recruiters to continue reading your CV because you’re
        telling them from the off exactly why they should hire you.
      </p>
      <img
        alt="Image placeholder"
        src="../../assets/img/theme/img-1-1000x600.jpg"
        className="img-fluid rounded"
      />

      <div className="row align-items-center my-3 pb-3 border-bottom">
        <div className="col-sm-6">
          <div className="icon-actions">
            <a href="#" className="like active">
              <i className="ni ni-like-2"></i>
              <span className="text-muted">150</span>
            </a>
            <a href="#">
              <i className="ni ni-chat-round"></i>
              <span className="text-muted">36</span>
            </a>
            <a href="#">
              <i className="ni ni-curved-next"></i>
              <span className="text-muted">12</span>
            </a>
          </div>
        </div>
        <div className="col-sm-6 d-none d-sm-block">
          <div className="d-flex align-items-center justify-content-sm-end">
            <div className="avatar-group">
              <a
                href="#"
                className="avatar avatar-xs rounded-circle"
                data-toggle="tooltip"
                data-original-title="Jessica Rowland"
              >
                <img
                  alt="Image placeholder"
                  src="../../assets/img/theme/team-1.jpg"
                  className=""
                />
              </a>
              <a
                href="#"
                className="avatar avatar-xs rounded-circle"
                data-toggle="tooltip"
                data-original-title="Audrey Love"
              >
                <img
                  alt="Image placeholder"
                  src="../../assets/img/theme/team-2.jpg"
                  className="rounded-circle"
                />
              </a>
              <a
                href="#"
                className="avatar avatar-xs rounded-circle"
                data-toggle="tooltip"
                data-original-title="Michael Lewis"
              >
                <img
                  alt="Image placeholder"
                  src="../../assets/img/theme/team-3.jpg"
                  className="rounded-circle"
                />
              </a>
            </div>
            <small className="pl-2 font-weight-bold">and 30+ more</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyCard;
