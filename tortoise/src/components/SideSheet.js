import React, { useState } from "react";
import '../styles/SideSheet.css';

const SideSheet = ({ claim, onClose }) => {
  const [activeTab, setActiveTab] = useState('Claim details');

  if (!claim) return null; // If no claim is selected, return null

  return (
    <div className="sidesheet">
      <div className="sidesheet-header">
        <button onClick={onClose} className="btn btn-light">← Back</button>
        <h4>{claim.employee}'s Claim</h4>
      </div>
      <div className="sidesheet-content">
        <ul className="nav nav-tabs">
          {['Claim details', 'Payment breakdown', 'Documents'].map(tab => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        {activeTab === 'Claim details' && (
          <div className="claim-details">
            <div className="request-details mb-3">
              <h5>Request details</h5>
              <div className="d-flex align-items-center">
                <img
                  src={claim.employeeImage}
                  alt={claim.employee}
                  className="rounded-circle mr-2"
                  width="50"
                />
                <div>
                  <strong>{claim.employee}</strong>
                  <p>{claim.position}</p>
                  <small>Requested {claim.requestedOn}</small>
                </div>
              </div>
            </div>
            <div className="payment-terms mb-3">
              <h5>Payment terms</h5>
              <div className="d-flex justify-content-between">
                <div>
                  <p>Deductible amount</p>
                  <strong>{claim.deductible} / month</strong>
                </div>
                <div>
                  <p>Tenure</p>
                  <strong>{claim.tenure}</strong>
                </div>
              </div>
              <p>
                {claim.deductible} to be deducted from {claim.employee}'s salary
                over a period of {claim.tenure}.
              </p>
            </div>
            <div className="claimed-items mb-3">
              <h5>Claimed items</h5>
              {claim.claimItems.map((item, index) => (
                <div key={index} className="claimed-item">
                  <p>{item.itemName}</p>
                  <small>{item.specs}</small>
                  <strong>{item.price}</strong>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Payment breakdown' && (
          <div className="payment-breakdown">
            <h5>Payment Breakdown</h5>
            {/* Employee Payment Breakdown */}
            <div className="payment-section mb-4">
              <h6>For Employee</h6>
              <div>
                <p>Total claim value: <strong>₹80,498</strong></p>
                <p>Monthly installment: <strong>{claim.deductible} for {claim.tenure}</strong></p>
                <p>Advance paid: <strong>₹1,000</strong></p>
                <p>Total amount to be paid: <strong>₹80,498</strong></p>
              </div>
            </div>

            {/* ABB Payment Breakdown */}
            <div className="payment-section mb-4">
              <h6>For ABB</h6>
              <div>
                <p>Sponsorship: <strong>₹20,000</strong></p>
                <p>Monthly rental payment: <strong>₹18,416</strong></p>
                <p>Total amount to be paid: <strong>₹1,04,498</strong></p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Documents' && (
          <div className="documents">
            <h5>Documents</h5>
            <div className="document-section mb-3">
              <h6>Signed by {claim.employee}</h6>
              <div>
                <p>Device Usage Policy (Signed on 12th April)</p>
                <button className="btn btn-link">View document</button>
              </div>
            </div>
            <div className="document-section mb-3">
              <h6>Yet to be signed by you</h6>
              <div>
                <p>Rental Schedule</p>
                <button className="btn btn-link">View and sign document</button>
              </div>
            </div>
          </div>
        )}

        <div className="approval-process mt-4">
          <h5>Approve claim</h5>
          <p>Your organization has set up a multi-level approval process:</p>
          {claim.approvalProcess.map((step) => (
            <div key={step.step} className="approval-step">
              <p>
                <strong>{step.step}. {step.approver}</strong>
                <small> - {step.status}</small>
              </p>
            </div>
          ))}
        </div>

        <div className="sidesheet-actions d-flex justify-content-between mt-4">
          <button className="btn btn-danger">Reject</button>
          <button className="btn btn-success">Approve</button>
        </div>
      </div>
    </div>
  );
};

export default SideSheet;
