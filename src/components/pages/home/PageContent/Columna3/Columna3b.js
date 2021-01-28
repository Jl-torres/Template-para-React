import React, { useState } from "react";
import Thead from "./columna3b/Thead";
import Tbody from "./columna3b/Tbody";
import AddCredit from "./columna3b/AddCredit";
import { TbodyJson } from "./columna3b/json/Tbody.json";

const Columna3b = () => {
  const [Lights, guardarLights] = useState(TbodyJson);

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header border-0">
              <h3 className="mb-0">Light table</h3>
            </div>

            <div className="table-responsive">
              <table className="table align-items-center table-flush">
                <Thead />

                <tbody className="list">
                  {Lights.map((Light) => (
                    <Tbody key={Light.id} Light={Light} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <AddCredit />
    </>
  );
};

export default Columna3b;
