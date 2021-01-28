import React from "react";

const Cardsheader = ({ card }) => {
  const { id, titulo, cantidad, clase, color } = card;

  return (
    <>
      <div className="col-xl-3 col-md-6">
        <div className="card card-stats">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h5 className="card-title text-uppercase text-muted mb-0">
                  {titulo}
                </h5>
                <span className="h2 font-weight-bold mb-0">{cantidad}</span>
              </div>
              <div className="col-auto">
                <div className={color}>
                  <i className={clase}></i>
                </div>
              </div>
            </div>
            <p className="mt-3 mb-0 text-sm">
              <span className="text-success mr-2">
                <i className="fa fa-arrow-up"></i> 3.48%
              </span>
              <span className="text-nowrap">Since last month</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardsheader;
