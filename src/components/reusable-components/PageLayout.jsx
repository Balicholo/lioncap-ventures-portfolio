import React from "react";
import Navbar from "../reusable-components/navbar";

const PageLayout = ({ children }) => {
  return (
    <div className="page-section">
      <Navbar />
      {children}
    </div>
  );
};

export default PageLayout;