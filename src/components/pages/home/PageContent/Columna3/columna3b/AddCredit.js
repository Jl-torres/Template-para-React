import React from 'react';

const AddCredit = () => {
    return (
        <div className="card-deck">
        <div className="card bg-gradient-default">
          <div className="card-body">
            <div className="mb-2">
              <sup className="text-white">$</sup> <span className="h2 text-white">3,300</span>
              <div className="text-light mt-2 text-sm">Your current balance</div>
              <div>
                <span className="text-success font-weight-600">+ 15%</span> <span className="text-light">($250)</span>
              </div>
            </div>
            <button className="btn btn-sm btn-block btn-neutral">Add credit</button>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <small className="text-light">Orders: 60%</small>
                <div className="progress progress-xs my-2">
                  <div className="progress-bar bg-success" style={{width:'60%'}}></div>
                </div>
              </div>
              <div className="col"><small className="text-light">Sales: 40%</small>
                <div className="progress progress-xs my-2">
                  <div className="progress-bar bg-warning" style={{width:'40%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="card bg-gradient-danger">
          
          <div className="card-body">
            <div className="row justify-content-between align-items-center">
              <div className="col">
                <img src="../../assets/img/icons/cards/bitcoin.png" alt="placeholder" />
              </div>
              <div className="col-auto">
                <span className="badge badge-lg badge-success">Active</span>
              </div>
            </div>
            <div className="my-4">
              <span className="h6 surtitle text-light">
                Username
              </span>
              <div className="h1 text-white">@johnsnow</div>
            </div>
            <div className="row">
              <div className="col">
                <span className="h6 surtitle text-light">Name</span>
                <span className="d-block h3 text-white">John Snow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddCredit;