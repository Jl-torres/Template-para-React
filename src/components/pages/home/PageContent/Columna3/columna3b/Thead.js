import React from "react";

const Thead = () => {
  return (
    <>
      <thead className="thead-light">
        <tr>
          <th scope="col" className="sort" data-sort="name">
            Project
          </th>
          <th scope="col" className="sort" data-sort="budget">
            Budget
          </th>
          <th scope="col" className="sort" data-sort="status">
            Status
          </th>
          <th scope="col">Users</th>
          <th scope="col" className="sort" data-sort="completion">
            Completion
          </th>
          <th scope="col"></th>
        </tr>
      </thead>
    </>
  );
};

export default Thead;
