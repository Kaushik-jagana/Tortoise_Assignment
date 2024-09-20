import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar bg-light p-4">
      <div className="logo mb-4">
        <h4>Tortoise</h4>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item mb-3">
          <span className="d-flex align-items-center">
            <i className="icon-claims mr-2"></i>
            Claims
            <span className="badge badge-pill badge-success ml-auto">17</span>
          </span>
        </li>
        <li className="nav-item mb-3">
          <span className="d-flex align-items-center">
            <i className="icon-employees mr-2"></i>
            Employees
            <span className="ml-auto">3,456</span>
          </span>
        </li>
        <li className="nav-item mb-3">
          <span className="d-flex align-items-center">
            <i className="icon-devices mr-2"></i>
            Devices
            <span className="ml-auto">128</span>
          </span>
        </li>
        <li className="nav-item mb-3">Rental schedules</li>
        <li className="nav-item mb-3">Billing</li>
        <li className="nav-item mb-3">Organization</li>
        <li className="nav-item mb-3">Support</li>
      </ul>
      <div className="user-info mt-auto">
        <span>Vardhan Koshal</span>
      </div>
    </div>
  );
};

export default Sidebar;
