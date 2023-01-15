import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Website from "./Website/Index";
import PortalHomePage from "./Portal/Home/Index";
import Authentication from "./Portal/Auth/Authentication";
import Application from "./Portal/Application/Application";

const NigerianNavy = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortalHomePage />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/application" element={<Application />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NigerianNavy;
