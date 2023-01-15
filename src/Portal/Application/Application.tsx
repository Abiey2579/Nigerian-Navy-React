import * as React from "react";
import NavigationBar from "../Components/Navbar/Index";
import Biodata from "./Steps/Biodata";
import StepsTracker from "./Steps/StepsTracker";

class Application extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <NavigationBar />
        <StepsTracker />
        <Biodata />
      </div>
    );
  }
}

export default Application;
