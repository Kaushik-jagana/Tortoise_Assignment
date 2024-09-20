// src/components/ClaimsTable.js

import React, { useState } from "react";
import { claimsData } from "../claimsData";
import SideSheet from "./SideSheet";
import '../styles/ClaimTable.css';
import Sidebar from "./Sidebar";
import Header from "./Header";
import ClaimsList from "./ClaimsList";
import Pagination from "./Pagination"; 

const ClaimsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClaim, setSelectedClaim] = useState(null);

  const totalPages = 5;

  const handleRowClick = (claim) => {
    setSelectedClaim(claim); // Open the sidesheet with selected claim
  };

  const handleCloseSidesheet = () => {
    setSelectedClaim(null); // Close the sidesheet
  };

  return (
    <div className="app d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <Header />
        <ClaimsList claims={claimsData} onRowClick={handleRowClick} />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Render SideSheet if a claim is selected */}
      <SideSheet claim={selectedClaim} onClose={handleCloseSidesheet} />
    </div>
  );
};

export default ClaimsTable;
