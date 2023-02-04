import React from "react";

import BlurComponent from "./BlurComponent";
import Searchbox from "./Searchbox";
import Display from "./Display";
import Text from "./Text";
import HowItWorks from "./HowTtWorks";
import DisplayNext from "./DisplayNext";
import Achievements from "./Achievements";
import About from "./About";
import Footer from "./Footer";

const Welcome = () => {
  return (
    <>
      <BlurComponent />
      <Searchbox />
      <Display />
      <Text />
      <HowItWorks />
      <DisplayNext />
      <Achievements />
      <About />
      <Footer />
    </>
  );
};

export default Welcome;
