import React from "react";

const ClaimItem = ({ claim, onRowClick }) => {
  return (
    <tr onClick={() => onRowClick(claim)} style={{ cursor: "pointer" }}>
      <td>
        <div className="employee-info d-flex align-items-center">
          <img
            src={claim.employeeImage}
            alt={claim.employeeName}
            className="rounded-circle mr-2"
            width="40"
          />
          <div>
            <strong>{claim.employee}</strong>
            <small>{claim.position}</small>
          </div>
        </div>
      </td>
      <td>{claim.device}</td>
      <td>{claim.requestedOn}</td>
      <td>{claim.amountPayable}</td>
      <td>
        <button className="btn btn-success">Approve</button>
      </td>
    </tr>
  );
};

export default ClaimItem;
