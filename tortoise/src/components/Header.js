import React from "react";

const Header = () => {
  return (
    <div className="header d-flex justify-content-between align-items-center">
      <h2>Claims</h2>
      <div>
        <button className="btn btn-light">Open</button>
        <button className="btn btn-light mx-2">Approved</button>
        <button className="btn btn-light">Rejected</button>
      </div>
    </div>
  );
};

export default Header;
