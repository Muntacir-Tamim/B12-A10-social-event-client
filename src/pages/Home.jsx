import React from "react";
import Banner from "../components/homepart/Banner";
import Feature from "../components/homepart/Feature";
import Gallery from "../components/homepart/Gallery";
import Newsletter from "../components/homepart/Newsletter";

const Home = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <Gallery />
      <Newsletter />
    </div>
  );
};

export default Home;
