import React from "react";

// DEFAULT COMPONENTS
import NavigationBar from "./../Components/Navbar/Index";
// import Footer from "./../Components/Footer/Footer";
// import Copyright from "../Components/Copyrights/Copyright";

// PAGE CUSTOM COMPONENTS
import Hero from "./Hero";
// import WhyNavy from "./WhyNavy";
// import CNS from "./CNS";
// import CTA from "./CTA";

const PortalHomePage = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Hero />
      {/*
      <WhyNavy />
      <CNS />
      <CTA />
      <Footer />
      <Copyright /> */}
    </React.Fragment>
  );
};

export default PortalHomePage;
