import React from "react";

const Comentarios = () => {
  return (
    <>
      <div className="mb-1">
        <div className="media media-comment">
          <img
            alt="placeholder"
            className="avatar avatar-lg media-comment-avatar rounded-circle"
            src="../../assets/img/theme/team-1.jpg"
          />
          <div className="media-body">
            <div className="media-comment-text">
              <h6 className="h5 mt-0">Michael Lewis</h6>
              <p className="text-sm lh-160">
                Cras sit amet nibh libero nulla vel metus scelerisque ante
                sollicitudin. Cras purus odio vestibulum in vulputate viverra
                turpis.
              </p>
              <div className="icon-actions">
                <a href="../../../App" className="like active">
                  <i className="ni ni-like-2"></i>
                  <span className="text-muted">3 likes</span>
                </a>
                <a href="../../../App">
                  <i className="ni ni-curved-next"></i>
                  <span className="text-muted">2 shares</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="media media-comment">
          <img
            alt="placeholder"
            className="avatar avatar-lg media-comment-avatar rounded-circle"
            src="../../assets/img/theme/team-2.jpg"
          />
          <div className="media-body">
            <div className="media-comment-text">
              <h6 className="h5 mt-0">Jessica Stones</h6>
              <p className="text-sm lh-160">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis.
              </p>
              <div className="icon-actions">
                <a href="../../../App" className="like active">
                  <i className="ni ni-like-2"></i>
                  <span className="text-muted">10 likes</span>
                </a>
                <a href="../../../App">
                  <i className="ni ni-curved-next"></i>
                  <span className="text-muted">1 share</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="media align-items-center">
          <img
            alt="placeholder"
            className="avatar avatar-lg rounded-circle mr-4"
            src="../../assets/img/theme/team-3.jpg"
          />
          <div className="media-body">
            <form>
              <textarea
                className="form-control"
                placeholder="Write your comment"
                rows="1"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comentarios;
