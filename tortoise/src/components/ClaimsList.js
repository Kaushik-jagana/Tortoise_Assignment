import React from "react";
import ClaimItem from "./ClaimItem";

const ClaimsList = ({ claims, onRowClick }) => {
  return (
    <div className="claims-list">
      <div className="search-bar mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
        />
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Device</th>
              <th>Requested on</th>
              <th>Amount payable</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((claim) => (
              <ClaimItem key={claim.id} claim={claim} onRowClick={onRowClick} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClaimsList;
