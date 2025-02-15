import React from "react";
import Header from "../components/Header";
import TypeMenu from "../components/TypeMenu";
import TopCoworkings from "../components/TopCoworkings";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <TypeMenu />
      <TopCoworkings />
      <Banner />
    </div>
  );
};

export default Home;
