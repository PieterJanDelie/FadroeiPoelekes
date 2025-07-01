import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Hero from "../../components/Hero/Hero";
import TeamIntro from "../../components/TeamIntro/TeamIntro";
import "./Home.css";

const Home = () => {
  return (
    <DefaultLayout header={false}>
      <Hero />
      <TeamIntro />
    </DefaultLayout>
  );
};

export default Home;
