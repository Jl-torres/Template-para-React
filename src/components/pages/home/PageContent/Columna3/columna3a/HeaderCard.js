import React, { useState } from "react";

const HeaderCard = () => {
  
  return (
    <>
        <div class="card-header d-flex align-items-center">
          <div class="d-flex align-items-center">
            <a href="#">
              <img src="../../assets/img/theme/team-1.jpg" class="avatar" />
            </a>
            <div class="mx-3">
              <a href="#" class="text-dark font-weight-600 text-sm">
                John Snow
              </a>
              <small class="d-block text-muted">3 days ago</small>
            </div>
          </div>
          <div class="text-right ml-auto">
            <button type="button" class="btn btn-sm btn-primary btn-icon">
              <span class="btn-inner--icon">
                <i class="ni ni-fat-add"></i>
              </span>
              <span class="btn-inner--text">Follow</span>
            </button>
          </div>
        </div>
    </>
  );
};

export default HeaderCard;