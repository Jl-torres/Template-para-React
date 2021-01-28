import React from 'react';

const SalesValue = () => {
    return (
        <>
     
      <div className="col-xl-8">
          <div className="card bg-default">
            <div className="card-header bg-transparent">
              <div className="row align-items-center">
                <div className="col">
                  <h6 className="text-light text-uppercase ls-1 mb-1">Overview</h6>
                  <h5 className="h3 text-white mb-0">Sales value</h5>
                </div>
                <div className="col">
                  <ul className="nav nav-pills justify-content-end">
                    <li className="nav-item mr-2 mr-md-0" data-toggle="chart" data-target="#chart-sales-dark" data-update='{"data":{"datasets":[{"data":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}' data-prefix="$" data-suffix="k">
                      <a href="#" className="nav-link py-2 px-3 active" data-toggle="tab">
                        <span className="d-none d-md-block">Month</span>
                        <span className="d-md-none">M</span>
                      </a>
                    </li>
                    <li className="nav-item" data-toggle="chart" data-target="#chart-sales-dark" data-update='{"data":{"datasets":[{"data":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}' data-prefix="$" data-suffix="k">
                      <a href="#" className="nav-link py-2 px-3" data-toggle="tab">
                        <span className="d-none d-md-block">Week</span>
                        <span className="d-md-none">W</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
             
              <div className="chart">
                
                <canvas id="chart-sales-dark" className="chart-canvas"></canvas>
              </div>
            </div>
          </div>
        </div>
   
        </>
    );
};

export default SalesValue;