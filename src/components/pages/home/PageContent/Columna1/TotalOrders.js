import React from "react";

const TotalOrder = () => {
  return (
    <>
      <div className="col-xl-4">
        <div className="card">
          <div className="card-header bg-transparent">
            <div className="row align-items-center">
              <div className="col">
                <h6 className="text-uppercase text-muted ls-1 mb-1">
                  Performance
                </h6>
                <h5 className="h3 mb-0">Total orders</h5>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="chart">
              <canvas id="chart-bars" className="chart-canvas"></canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalOrder;
