import React from "react";
import BodyCard from "./columna3a/BodyCard";
import HeaderCard from "./columna3a/HeaderCard";
import Comentarios from "./columna3a/Comentarios";

const Columna3a = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="h3 mb-0">Activity feed</h5>
        </div>
        <HeaderCard />

        <div className="card-body">
          <BodyCard />

          <Comentarios />
        </div>
      </div>
    </>
  );
};

export default Columna3a;
