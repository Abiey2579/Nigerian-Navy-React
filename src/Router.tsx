import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Website from "./Website/Index";
import PortalHomePage from "./Portal/Home/Index";

const NigerianNavy = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortalHomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NigerianNavy;
