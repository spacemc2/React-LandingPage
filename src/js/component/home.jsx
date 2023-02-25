import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import CardContainer from "./cardContainer.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <Navbar />
      <Jumbotron />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default Home;
